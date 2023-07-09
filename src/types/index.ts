export type Rating = {
  id: string
  rate: number
  description: string
  created_at: Date
  book_id: string
  user_id: string
}

export type User = {
  id: string
  name: string
  avatar_url: string | null
  created_at: Date
}
