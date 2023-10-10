import { PrismaClient } from "@prisma/client"
import { compare } from "bcrypt"
import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
​
const prisma = new PrismaClient();
​
export const authOptions = {
    session: {
        strategy: 'jwt'
    
},
providers: [
    CredentialsProvider({
        name: 'Sign in',
        credentials: {
            email: {
                label: 'email',
                type: 'email',
                placeHolder: 'hello@example.com'
            },
            password: { label: 'Password', type: 'password'}
        },
        async authorize(credentials) {
            //handle Auth
            if(!credentials.email || !credentials.password) {
                return null
            }
            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            })
            if (!user){
                return null
            }
            const isPasswordValid = await compare(
                credentials.password,
                user.password
            )
            if (!isPasswordValid){
                return null
            }
            return{
                id: user.id + '',
                email: user.email,
                name: user.name
            }
        }
    })
]}