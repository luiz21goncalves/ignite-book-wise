import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { Rating } from '@/types'

async function getMostRecentRatings() {
  const { data } = await api.get<{ rating: Rating[] }>('/ratings/most-recent')

  return data.rating
}

export const useMostRecentRatings = () => {
  return useQuery({
    queryKey: ['ratings', 'most-recente'],
    queryFn: getMostRecentRatings,
  })
}
