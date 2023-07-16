import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { Book } from '@/types'

type Data = {
  books: Book[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'

  if (isGetMethod) {
    const q = req.query?.q as string | undefined
    const category = req.query?.category as string | undefined

    const books = await prisma.book.findMany({
      where: {
        categories: {
          some: {
            category: {
              id: category,
            },
          },
        },
        OR: [
          {
            name: {
              contains: q,
              mode: 'insensitive',
            },
          },
          {
            author: {
              contains: q,
              mode: 'insensitive',
            },
          },
        ],
      },
    })

    return res.status(200).json({ books })
  }
}
