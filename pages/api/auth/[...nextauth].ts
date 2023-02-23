import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import {session} from "next-auth/core/routes";
import { SignIn } from "../../../services/auth/auth.service";

interface User {
  id: string;
  email: string;
  token: string;
}
export default NextAuth({
  providers: [
    GoogleProvider({
      name: 'Google',
      clientId: `${process.env.NEXT_PUBLIC_GOOGLE_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_GOOGLE_SECRET}`,
      profile: async(profile, token) => {
        try {
          const { data } = await SignIn(token.access_token);
          console.log(data)
        } catch (e) {

        }
        return {id: profile.sub, email: profile.email, token: token.access_token}
      }
    })
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  callbacks: {
    async signIn({user, account, profile, email, credentials}) {
      console.log('sign In')
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async session({ session, token, user }) {
      // console.log('session', session)
      return session
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return token
    }
  }
})
