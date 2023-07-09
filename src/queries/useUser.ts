import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { User } from '@/types'

type useUserProps = {
  userId?: string
}

async function getUser(context: QueryFunctionContext) {
  const [, userId] = context.queryKey

  const { data } = await api.get<{ user: User }>(`/users/${userId}`)

  return data.user
}

export const useUser = ({ userId }: useUserProps) => {
  return useQuery({
    enabled: Boolean(userId),
    queryKey: ['users', userId],
    queryFn: getUser,
  })
}
