import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { Rating } from '@/types'

type Data = {
  rating: Rating | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'
  const bookId = req.query.bookId as string

  if (isGetMethod && bookId) {
    const result = await prisma.$queryRaw<Rating[]>`
      SELECT
        R.id,
        R.description,
        R.created_at,
        R.book_id,
        R.user_id,
        (SELECT AVG(rate)::NUMERIC(5,1) from ratings as R where R.book_id = '375948a7-bca3-4b59-9f97-bfcde036b4ca') as rate
      FROM ratings as R
      WHERE R.book_id = '375948a7-bca3-4b59-9f97-bfcde036b4ca'
      LIMIT 1
    `
    const rating = result[0]

    return res
      .status(200)
      .json({ rating: { ...rating, rate: Number(rating.rate) } })
  }

  return res.status(404)
}
