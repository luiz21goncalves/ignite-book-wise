import { useEffect } from 'react'

import { useBookRatings } from '@/queries'

import { AssessForm } from './AssessForm'
import { useBookDetail } from './BookDetailContext'
import { Comment } from './Comment'

export function CommentList() {
  const { book, setRatings } = useBookDetail()

  const { data: ratings } = useBookRatings({ bookId: book.id })

  useEffect(() => {
    setRatings(ratings ?? [])
  }, [ratings, setRatings])

  return (
    <div className="flex flex-col gap-4">
      <AssessForm />
      <div className="flex flex-col gap-3">
        {ratings?.map((rating) => {
          return <Comment key={rating.id} rating={rating} />
        })}
      </div>
    </div>
  )
}
