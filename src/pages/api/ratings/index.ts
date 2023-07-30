import type { NextApiRequest, NextApiResponse } from 'next'

import { z } from 'zod'

import { prisma } from '@/lib/prisma'

const createRatingSchema = z.object({
  rate: z.number().min(0).max(5),
  bookId: z.string().uuid(),
  userId: z.string().cuid(),
  description: z.string().min(1).max(450),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>,
) {
  const isPostMethod = req.method === 'POST'

  if (isPostMethod) {
    const { rate, bookId, description, userId } = createRatingSchema.parse(
      req.body,
    )

    await prisma.rating.create({
      data: {
        rate,
        description,
        book_id: bookId,
        user_id: userId,
      },
    })

    return res.status(201).json()
  }

  return res.status(404)
}
