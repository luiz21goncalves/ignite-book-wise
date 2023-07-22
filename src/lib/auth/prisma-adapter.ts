/* eslint-disable camelcase */
import { Adapter } from 'next-auth/adapters'

import { prisma } from '../prisma'

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user) {
      const { email, emailVerified, image, name } = user

      const prismaUser = await prisma.user.create({
        data: {
          avatar_url: image,
          name,
          email,
          emailVerified,
        },
      })

      return {
        id: prismaUser.id,
        email: prismaUser.email!,
        emailVerified: prismaUser.emailVerified,
        image: prismaUser.avatar_url,
        name: prismaUser.name,
      }
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: { id },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        email: user.email!,
        emailVerified: user.emailVerified,
        image: user.avatar_url,
        name: user.name,
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: { email },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        email: user.email!,
        emailVerified: user.emailVerified,
        image: user.avatar_url,
        name: user.name,
      }
    },

    async getUserByAccount({ provider, providerAccountId }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        email: user.email!,
        emailVerified: user.emailVerified,
        image: user.avatar_url,
        name: user.name,
      }
    },

    async updateUser(user) {
      const { id, email, emailVerified, image, name } = user

      const prismaUser = await prisma.user.update({
        where: { id },
        data: {
          avatar_url: image,
          name,
          email,
          emailVerified,
        },
      })

      return {
        id: prismaUser.id,
        email: prismaUser.email!,
        emailVerified: prismaUser.emailVerified,
        image: prismaUser.avatar_url,
        name: prismaUser.name,
      }
    },

    async linkAccount(account) {
      const {
        provider,
        providerAccountId,
        type,
        userId,
        access_token,
        expires_at,
        id_token,
        refresh_token,
        scope,
        session_state,
        token_type,
      } = account

      await prisma.account.create({
        data: {
          provider,
          providerAccountId,
          type,
          userId,
          access_token,
          expires_at,
          id_token,
          refresh_token,
          scope,
          session_state,
          token_type,
        },
      })
    },

    async createSession({ expires, sessionToken, userId }) {
      await prisma.session.create({
        data: {
          userId,
          expires,
          sessionToken,
        },
      })

      return {
        expires,
        sessionToken,
        userId,
      }
    },

    async getSessionAndUser(sessionToken) {
      const session = await prisma.session.findUnique({
        where: {
          sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!session) {
        return null
      }

      const { user } = session

      return {
        user: {
          id: user.id,
          email: user.email!,
          emailVerified: user.emailVerified,
          image: user.avatar_url,
          name: user.name,
        },
        session: {
          expires: session.expires,
          sessionToken: session.sessionToken,
          userId: session.userId,
        },
      }
    },

    async updateSession({ sessionToken, expires, userId }) {
      const prismaSession = await prisma.session.update({
        where: { sessionToken },
        data: {
          expires,
          userId,
        },
      })

      return {
        expires: prismaSession.expires,
        sessionToken: prismaSession.sessionToken,
        userId: prismaSession.userId,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({ where: { sessionToken } })
    },
  }
}
