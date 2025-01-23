import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongo";
import Google from "next-auth/providers/google";

const config = {
  providers: [
    Resend({
      apiKey:process.env.RESEND_KEY,
      from: "example@mydom.ravee.xyz",
      name: "Email",
    }),

    Google({
     
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  debug: true, // Enable detailed logs for debugging
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
