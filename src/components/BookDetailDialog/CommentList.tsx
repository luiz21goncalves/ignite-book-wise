import { useBookRatings } from '@/queries'

import { Link } from '../Link'
import { Comment } from './Comment'

type CommentListProps = {
  bookId: string
}

export function CommentList(props: CommentListProps) {
  const { bookId } = props

  const { data: ratings } = useBookRatings({ bookId })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-200">Avaliações</span>
        <Link.Root href="#" variant="purple">
          Avaliar
        </Link.Root>
      </div>
      <div className="flex flex-col gap-3">
        {ratings?.map((rating) => {
          return <Comment key={rating.id} rating={rating} />
        })}
      </div>
    </div>
  )
}
