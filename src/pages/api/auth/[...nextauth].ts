import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { ENV } from '@/env/index.mjs'
import { PrismaAdapter } from '@/lib/auth/prisma-adapter'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(),
  providers: [
    GithubProvider({
      clientId: ENV.GITHUB_ID,
      clientSecret: ENV.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: ENV.GOOGLE_ID,
      clientSecret: ENV.GOOGLE_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)
