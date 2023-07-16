import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { Book } from '@/types'

async function getFilteredBooks(context: QueryFunctionContext) {
  const [_key1, _key2, category, q] = context.queryKey

  const { data } = await api.get<{ books: Book[] }>('/books', {
    params: {
      category,
      q,
    },
  })

  return data.books
}

type UseFilteredBooksParams = {
  category: string | null
  q: string
}

export const useFilteredBooks = ({ category, q }: UseFilteredBooksParams) => {
  return useQuery({
    queryFn: getFilteredBooks,
    queryKey: ['books', 'filtered', category, q],
  })
}
