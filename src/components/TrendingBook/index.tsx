import Image from 'next/image'

import { useRating } from '@/queries'
import { Book } from '@/types'

import { Rating } from '../Rating'

type TrendingBookProps = {
  isRead?: boolean
  size?: 'md' | 'sm'
  book: Book
}

export function TrendingBook(props: TrendingBookProps) {
  const { isRead = false, size = 'md', book } = props

  const { data: rating } = useRating({ bookId: book.id })

  return (
    <div
      className="relative flex gap-5 overflow-hidden rounded-lg border-2 border-transparent bg-gray-700 px-5 py-4 transition-colors hover:border-gray-600"
      data-size={size}
    >
      {isRead && (
        <span className="absolute right-0 top-0 rounded-bl bg-green-300 px-2 py-[0.125rem] text-xs font-bold uppercase text-green-100">
          Lido
        </span>
      )}
      <Image
        src={book.cover_url}
        alt=""
        className="h-24 w-16 flex-shrink-0 rounded bg-gradient-vertical"
        width={64}
        height={96}
      />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-heading-xs font-bold">{book.name}</span>
          <span className="text-sm text-gray-400">{book.author}</span>
        </div>

        <Rating rate={rating?.rate ?? 0} />
      </div>
    </div>
  )
}
