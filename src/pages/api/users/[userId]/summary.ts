import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { UserSummary } from '@/types'

type Data = {
  summary: UserSummary
}

type Summary = {
  categories: Record<string, number>
  pages: number
  authors: string[]
  books: number
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
      include: {
        book: {
          include: {
            categories: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    })

    const summary = ratings.reduce<Summary>(
      (summary, rating, _, original) => {
        summary.pages += rating.book.total_pages
        summary.books = original.length
        summary.authors.push(rating.book.author)

        rating.book.categories.forEach((category) => {
          const categoryName = category.category.name
          const value = summary.categories[categoryName] ?? 0
          summary.categories[categoryName] = value + 1
        })

        return summary
      },
      {
        authors: [],
        books: 0,
        categories: {},
        pages: 0,
      } as Summary,
    )

    const authors = new Set(summary.authors).size
    const { category } = Object.entries(summary.categories).reduce(
      (accumulator, [category, total]) => {
        if (accumulator.value < total) {
          accumulator.category = category
          accumulator.value = total
        }

        return accumulator
      },
      { value: 0, category: '' },
    )

    return res.status(200).json({
      summary: {
        total_authors: authors,
        total_books: summary.books,
        pages_read: summary.pages,
        most_read_category: category,
      },
    })
  }

  return res.status(404)
}
