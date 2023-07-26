import { useEffect } from 'react'

import { useBookRatings } from '@/queries'

import { Link } from '../Link'
import { SignInDialog } from '../SignInDialog'
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
      <div className="flex items-center justify-between">
        <span className="text-gray-200">Avaliações</span>
        <SignInDialog>
          <Link.Root href="#" variant="purple">
            Avaliar
          </Link.Root>
        </SignInDialog>
      </div>
      <div className="flex flex-col gap-3">
        {ratings?.map((rating) => {
          return <Comment key={rating.id} rating={rating} />
        })}
      </div>
    </div>
  )
}
