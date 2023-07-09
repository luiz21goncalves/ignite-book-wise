import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { Book } from '@/types'

async function getBook(context: QueryFunctionContext) {
  const [, bookId] = context.queryKey

  const { data } = await api.get<{ book: Book }>(`/books/${bookId}`)

  return data.book
}
type useBookProps = {
  bookId: string
}

export const useBook = ({ bookId }: useBookProps) => {
  return useQuery({
    enabled: Boolean(bookId),
    queryKey: ['books', bookId],
    queryFn: getBook,
  })
}
