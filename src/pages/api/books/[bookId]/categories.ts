import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { Category } from '@/types'

type Data = {
  categories: Category[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const isGetMethod = req.method === 'GET'
  const { bookId } = req.query

  if (isGetMethod && bookId) {
    const categories = await prisma.category.findMany({
      where: {
        books: {
          some: {
            book_id: bookId as string,
          },
        },
      },
    })

    return res.status(200).json({ categories })
  }

  return res.status(404)
}
