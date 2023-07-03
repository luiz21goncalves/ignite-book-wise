import Image from 'next/image'

import { Rating } from '../Rating'

export function TrendingBooks() {
  return (
    <div className="flex gap-5 rounded-lg border-2 border-transparent bg-gray-700 px-5 py-4 transition-colors hover:border-gray-600">
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

        <Rating />
      </div>
    </div>
  )
}
