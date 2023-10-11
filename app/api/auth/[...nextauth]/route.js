import { PrismaClient } from "@prisma/client"
import { compare } from "bcrypt"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import secret from 'next-auth/jwt';

const prisma = new PrismaClient();
export const authOptions = {
  session: {
    strategy: 'jwt'

  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Access the secret from environment variables
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeHolder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        //handle Auth
        if (!credentials.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          return null
        }
        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )
        if (!isPasswordValid) {
          return null
        }
        return {
          id: user.id + '',
          email: user.email,
          name: user.name
        }
      }
    })
  ],
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "#ffff", // Hex color code
    logo: "", // Absolute URL to image
    buttonText: "#000" // Hex color code
  }
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };



