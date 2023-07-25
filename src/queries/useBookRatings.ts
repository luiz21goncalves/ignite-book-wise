import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { Rating } from '@/types'

async function getBookRatings(context: QueryFunctionContext) {
  const [_, bookId] = context.queryKey
  const { data } = await api.get<{ ratings: Rating[] }>(
    `/books/${bookId}/ratings`,
  )

  return data.ratings
}

type UseBookRatingsProps = {
  bookId: string
}

export const useBookRatings = ({ bookId }: UseBookRatingsProps) => {
  return useQuery({
    queryFn: getBookRatings,
    queryKey: ['books', bookId, 'ratings'],
    enabled: Boolean(bookId),
  })
}
