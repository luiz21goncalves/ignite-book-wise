import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { Rating } from '@/types'

type UseRatingParams = {
  bookId: string
}

async function getRating(context: QueryFunctionContext) {
  const [_, bookId] = context.queryKey

  const { data } = await api.get<{ rating: Rating | null }>(
    `/ratings/${bookId}`,
  )

  return data.rating
}

export const useRating = ({ bookId }: UseRatingParams) => {
  return useQuery({
    queryKey: ['ratings', bookId],
    queryFn: getRating,
  })
}
