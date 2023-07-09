import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { Rating } from '@/types'

type Data = {
  rating: Rating[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'

  if (isGetMethod) {
    const rating = await prisma.rating.findMany({
      orderBy: {
        created_at: 'desc',
      },
      take: 10,
    })

    return res.status(200).json({ rating })
  }

  return res.status(404)
}
