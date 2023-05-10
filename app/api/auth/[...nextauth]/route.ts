import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/app/lib/prismadb";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
              email: { label: 'email', type: 'text' },
              password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
              if (!credentials?.email || !credentials?.password) {
                throw new Error('Invalid credentials');
              }
      
              const user = await prisma.user.findUnique({
                where: {
                  email: credentials.email
                }
              });
      
              if (!user || !user?.hashedPassword) {
                throw new Error('Invalid credentials');
              }
      
              const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.hashedPassword
              );
      
              if (!isCorrectPassword) {
                throw new Error('Invalid credentials');
              }
      
              return user;
            }
          })
        ],
        pages: {
          signIn: '/',
        },
        debug: process.env.NODE_ENV === 'development',
        session: {
          strategy: "jwt",
        },
    secret: process.env.JWT_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}