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

  if (isGetMethod) {
    const categories = await prisma.category.findMany()

    return res.status(200).json({ categories })
  }
}
