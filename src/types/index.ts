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

export type Book = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
}

export type BookMostRecent = Book & { rate: string }
