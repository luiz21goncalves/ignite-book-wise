import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { BookMostRecent } from '@/types'

type Data = {
  books: BookMostRecent[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'

  if (isGetMethod) {
    const books = await prisma.$queryRaw<BookMostRecent[]>`
    SELECT
      *,
      (
        SELECT SUM(rate)::NUMERIC(5,0) FROM ratings as R WHERE R.book_id = B.id
      ) as total_rate,
      (SELECT AVG(rate)::NUMERIC(5, 2) FROM ratings as R WHERE R.book_id = B.id) as rate
    FROM books as B
    ORDER BY total_rate DESC
    LIMIT 5
    `

    return res.status(200).json({ books })
  }

  return res.status(404)
}
