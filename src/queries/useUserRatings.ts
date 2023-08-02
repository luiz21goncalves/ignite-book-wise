import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { Rating } from '@/types'

type UseUserRatingsProps = {
  userId?: string
  q: string
}

async function getUserRatings(context: QueryFunctionContext) {
  const [, userId, _, q] = context.queryKey

  const { data } = await api.get<{ ratings: Rating[] }>(
    `/users/${userId}/ratings`,
    { params: { q } },
  )

  return data.ratings
}

export const useUserRatings = ({ userId, q }: UseUserRatingsProps) => {
  return useQuery({
    enabled: Boolean(userId),
    queryKey: ['users', userId, 'ratings', q],
    queryFn: getUserRatings,
  })
}
