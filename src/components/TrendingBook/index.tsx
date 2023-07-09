import Image from 'next/image'

import { Rating } from '../Rating'

type TrendingBookProps = {
  isRead?: boolean
  size?: 'md' | 'sm'
}

export function TrendingBook(props: TrendingBookProps) {
  const { isRead = false, size = 'md' } = props

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
        src={''}
        alt=""
        className="h-24 w-16 flex-shrink-0 rounded bg-gradient-vertical"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-heading-xs font-bold">
            A revolução dos bichos
          </span>
          <span className="text-sm text-gray-400">George Orwell</span>
        </div>

        <Rating rate={4} />
      </div>
    </div>
  )
}
