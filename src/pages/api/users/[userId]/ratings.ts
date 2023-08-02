import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { Rating } from '@/types'

type Data = {
  ratings: Rating[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'
  const { userId } = req.query

  if (isGetMethod && userId) {
    const ratings = await prisma.rating.findMany({
      where: {
        user_id: userId as string,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    return res.status(200).json({ ratings })
  }

  return res.status(404)
}
