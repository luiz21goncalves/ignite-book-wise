import Image from 'next/image'

import dayjs from 'dayjs'

import { useBook } from '@/queries'
import { Rating as TRating } from '@/types'

import { Rating } from '../Rating'

type CommentProps = {
  rating: TRating
}

export function Comment(props: CommentProps) {
  const { rating } = props

  const { data: book } = useBook({ bookId: rating.book_id })

  const relativeTime = dayjs(rating.created_at).fromNow()
  const formatterTime = dayjs(rating.created_at).format('LLLL')

  return (
    <div className="flex flex-col gap-2">
      <time
        className="text-sm text-gray-300"
        title={formatterTime}
        dateTime={rating.created_at.toString()}
      >
        {relativeTime}
      </time>
      <div className="flex flex-col gap-6 rounded-lg bg-gray-700 p-6">
        <div className="flex gap-6">
          <Image
            src={book?.cover_url!}
            alt=""
            className="h-[134px] w-[98px] rounded"
            width={98}
            height={134}
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <strong className="text-heading-sm font-bold">
                {book?.name}
              </strong>
              <span className="text-sm text-gray-400">{book?.author}</span>
            </div>
            <Rating rate={rating.rate} />
          </div>
        </div>
        <p className="text-sm text-gray-300">{rating.description}</p>
      </div>
    </div>
  )
}
