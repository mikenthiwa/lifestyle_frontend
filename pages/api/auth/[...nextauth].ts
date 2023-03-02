import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { SignIn } from "../../../services/auth/auth.service";
import {NextApiRequest, NextApiResponse} from "next";



interface Profile {
  id: string;
  email: string;
  name: string;
  isAuthenticated: string;
  token: {
    refreshToken: string;
  }
}
type NextAuthOptionsCallback = (req: NextApiRequest, res: NextApiResponse) => NextAuthOptions;

const nextAuthOptions: NextAuthOptionsCallback = (req, res) => {
  return {
    providers: [
      GoogleProvider({
        name: 'Google',
        clientId: `${process.env.NEXT_PUBLIC_GOOGLE_ID}`,
        clientSecret: `${process.env.NEXT_PUBLIC_GOOGLE_SECRET}`,
        profile: async(profile, token): Promise<Profile> => {
          const { data: { accessToken, refreshToken, isAuthenticated } } = await SignIn(token.access_token);
          res.setHeader('Set-Cookie', [
            accessToken,
            refreshToken,
          ])
          return {id: profile.sub, email: profile.email, name: profile.name, isAuthenticated, token: { refreshToken}}
        }
      })
    ],
    secret: process.env.NEXT_PUBLIC_JWT_SECRET,
    pages: {
      signIn: '/'
    },
    callbacks: {
      async signIn({user, account, profile, email, credentials}) {
        return user.isAuthenticated;
      },
      async jwt({ token,user, account, profile }) {
        // Persist the OAuth access_token and or the user id to the token right after signin
        if(user) {
          token.name = user.name;
          token.refreshToken = user.token.refreshToken;
          return token;
        } else {
          return token
        }
      },

      async session({ session, token, user }) {
        return session
      },
    }
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res))
}
