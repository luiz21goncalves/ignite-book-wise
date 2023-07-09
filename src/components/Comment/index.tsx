import Image from 'next/image'

import dayjs from 'dayjs'

import { useBook } from '@/queries/useBook'
import { useUser } from '@/queries/useUser'
import { Rating as TRating } from '@/types'

import { Avatar } from '../Avatar'
import { Rating } from '../Rating'

type CommentProps = {
  rating: TRating
}

export function Comment(props: CommentProps) {
  const { rating } = props

  const { data: user } = useUser({ userId: rating.user_id })
  const { data: book } = useBook({ bookId: rating.book_id })

  const relativeTime = dayjs(rating.created_at).fromNow()
  const formatterTime = dayjs(rating.created_at).format('LLLL')

  return (
    <div className="flex flex-col gap-8 rounded-lg bg-gray-700 p-6">
      <div className="flex items-start justify-between gap-4">
        <Avatar src={user?.avatar_url!} alt="" />
        <div className="flex w-full flex-col">
          <span>{user?.name}</span>
          <time
            dateTime={rating.created_at.toString()}
            title={formatterTime}
            className="text-sm text-gray-400"
          >
            {relativeTime}
          </time>
        </div>
        <Rating rate={rating.rate} />
      </div>

      <div className="flex gap-5">
        <Image
          src={book?.cover_url!}
          alt=""
          width={108}
          height={152}
          className="h-[9.5rem] w-[6.75rem] flex-shrink-0 rounded object-cover"
        />

        <div className="flex flex-col gap-5">
          <div className="flex w-full flex-col">
            <span className="text-heading-xs font-bold">{book?.name}</span>
            <span className="text-sm text-gray-400">{book?.author}</span>
          </div>

          <p className="text-sm text-gray-300">{rating?.description}</p>
        </div>
      </div>
    </div>
  )
}
