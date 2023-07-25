import { ReactNode, createContext, useContext, useState } from 'react'

import { Book, Rating } from '@/types'

type BookDetailContextData = {
  book: Book
  rate: number
  ratings: Rating[]
  setRatings: (ratings: Rating[]) => void
}

type BookDetailProviderProps = {
  children: ReactNode
  book: Book
  rate: number
}

const BookDetailContext = createContext({} as BookDetailContextData)

export function BookDetailProvider(props: BookDetailProviderProps) {
  const { book, children, rate } = props

  const [ratings, setRatings] = useState<Rating[]>([])

  return (
    <BookDetailContext.Provider value={{ book, rate, ratings, setRatings }}>
      {children}
    </BookDetailContext.Provider>
  )
}

export function useBookDetail() {
  return useContext(BookDetailContext)
}
