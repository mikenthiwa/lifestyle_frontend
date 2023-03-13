import {NextApiRequest, NextApiResponse} from "next";
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { SignIn, RefreshToken } from "../../../services/auth/auth.service";

type AuthOptions = (req: NextApiRequest, res: NextApiResponse) => NextAuthOptions;

const authOptions: AuthOptions = (req, res) => ({
  providers: [
    GoogleProvider({
      name: 'Google',
      clientId: `${process.env.NEXT_PUBLIC_GOOGLE_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_GOOGLE_SECRET}`,
      profile: async(profile, token) => {
        const { data: { refreshToken, accessTokenExpiry }, headers } = await SignIn(token.access_token);
        res.setHeader('Set-Cookie', headers['set-cookie'])
        token.refresh_token = refreshToken
        token.expires_at = accessTokenExpiry;
        return {id: profile.sub, email: profile.email, name: profile.name, image: profile.picture}
      }
    })
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  pages: {
    signIn: '/'
  },
  callbacks: {
    async signIn({user}) {
      return !!user;
    },
    async jwt({ token, user, account}) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if(account) {
        return {
          ...token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token
        };
      }
      else if(Date.now() < Math.round(((token.expires_at - 30) * 60 * 1000))){
        return token;
      } else {
        const { data: { accessTokenExpiry }, headers} = await RefreshToken(token.refresh_token);
        res.setHeader('Set-Cookie', headers['set-cookie'])
        return { ...token, expires_at: accessTokenExpiry }
      }
    },
    async session({ session }) {
      return session;
    },
  }
})

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions(req, res))
}
