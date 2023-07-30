import dayjs from 'dayjs'

import { useUser } from '@/queries'
import { Rating as TRating } from '@/types'

import { Avatar } from '../Avatar'
import { Rating } from '../Rating'

type CommentProps = {
  rating: TRating
}

export function Comment(props: CommentProps) {
  const { rating } = props

  const { data: user } = useUser({ userId: rating.user_id })

  const date = dayjs(rating.created_at)
  const relativeTime = date.fromNow()
  const longFormattedTime = date.format('LLLL')

  return (
    <div className="flex flex-col gap-5 rounded-lg bg-gray-700 p-6">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <Avatar src={user?.avatar_url!} alt="" />
          <div className="flex flex-col">
            <span className="text-heading-xs font-bold text-gray-100">
              {user?.name}
            </span>
            <time
              className="text-sm text-gray-400"
              dateTime={date.toString()}
              title={longFormattedTime}
            >
              {relativeTime}
            </time>
          </div>
        </div>
        <Rating rate={rating.rate} />
      </div>
      <p className="text-sm text-gray-300">{rating.description}</p>
    </div>
  )
}
