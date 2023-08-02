import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { UserSummary } from '@/types'

type UseUserSummaryProps = {
  userId?: string
}

async function getUserSummary(context: QueryFunctionContext) {
  const [, userId] = context.queryKey

  const { data } = await api.get<{ summary: UserSummary }>(
    `/users/${userId}/summary`,
  )

  return data.summary
}

export const useUserSummary = ({ userId }: UseUserSummaryProps) => {
  return useQuery({
    enabled: Boolean(userId),
    queryKey: ['users', userId, 'summary'],
    queryFn: getUserSummary,
  })
}
