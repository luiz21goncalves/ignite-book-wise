import { useSession } from 'next-auth/react'

import { QueryFunctionContext, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { User } from '@/types'

async function getUser(context: QueryFunctionContext) {
  const [, email] = context.queryKey

  const { data } = await api.get<{ user: User }>(`/me/${email}`)

  return data.user
}

export const useCurrentUser = () => {
  const { status, data: session } = useSession()

  return useQuery({
    queryKey: ['me', session?.user?.email],
    queryFn: getUser,
    enabled: status === 'authenticated' && Boolean(session?.user?.email),
  })
}
