import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { BookMostRecent } from '@/types'

async function getMostPopularBooks() {
  const { data } = await api.get<{ books: BookMostRecent[] }>(
    '/books/most-popular',
  )

  return data.books
}

export const useMostPopularBooks = () =>
  useQuery({
    queryFn: getMostPopularBooks,
    queryKey: ['books', 'most-popular'],
  })
