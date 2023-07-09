import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { Book } from '@/types'

type Data = {
  book: Book | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'
  const { bookId } = req.query

  if (isGetMethod && bookId) {
    const book = await prisma.book.findUnique({
      where: {
        id: bookId as string,
      },
    })

    return res.status(200).json({ book })
  }

  return res.status(404)
}
