 
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import connectDB from "~/config/database";
import User from "~/models/User"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code'
        }
      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ profile }) {
      const email = profile?.email;
      if (!email) return false;
     
      await connectDB()
      const userExist = await User.findOne({email})
      if(!userExist){
        const username = (profile.name || email.split("@")[0]).slice(0,20)
        await User.create({
          email,
          username,
          image: "picture" in profile && typeof profile.picture === "string" ? profile.picture : undefined
        })
      }

      return true

    },
    async session({ session }) {
      const user = await User.findOne({email: session.user.email})
      if (user) session.user.id = user._id.toString()
      return session
    },
  }
} satisfies NextAuthOptions;


 