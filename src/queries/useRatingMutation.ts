import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/lib/api'

type CreateRating = {
  rate: number
  description: string
  userId: string
  bookId: string
}

async function createRating({
  rate,
  bookId,
  description,
  userId,
}: CreateRating) {
  return api.post('/ratings', {
    rate,
    bookId,
    description,
    userId,
  })
}

export const useRatingMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createRating,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['books', variables.bookId, 'ratings'])
      queryClient.invalidateQueries(['ratings', variables.bookId])
    },
  })
}
