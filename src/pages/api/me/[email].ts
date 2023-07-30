import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { User } from '@/types'

type Data = {
  user: User
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'
  const { email } = req.query

  if (isGetMethod && email) {
    const user = await prisma.user.findUnique({
      where: {
        email: email as string,
      },
    })

    return res.status(200).json({ user: user! })
  }

  return res.status(404)
}
