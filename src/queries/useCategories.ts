import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { Category } from '@/types'

async function getAllCategories() {
  const { data } = await api.get<{ categories: Category[] }>('/categories')

  return data.categories
}

export const useCategories = () => {
  return useQuery({
    queryFn: getAllCategories,
    queryKey: ['categories'],
  })
}
