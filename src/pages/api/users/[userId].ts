import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { User } from '@/types'

type Data = {
  user: User | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'
  const { userId } = req.query

  if (isGetMethod && userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId as string,
      },
    })

    return res.status(200).json({ user })
  }

  return res.status(404)
}
