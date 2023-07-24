import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { Category } from '@/types'

async function getBookCategories(context: QueryFunctionContext) {
  const [_, bookId] = context.queryKey
  const { data } = await api.get<{ categories: Category[] }>(
    `/books/${bookId}/categories`,
  )

  return data.categories
}

type UseBookCategoriesProps = {
  bookId: string
}

export const useBookCategories = ({ bookId }: UseBookCategoriesProps) => {
  return useQuery({
    queryFn: getBookCategories,
    queryKey: ['books', bookId, 'categories'],
    enabled: Boolean(bookId),
  })
}
