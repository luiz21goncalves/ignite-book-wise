import Image from 'next/image'

import { Avatar } from '../Avatar'
import { Rating } from '../Rating'

export function Comment() {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-gray-700 p-6">
      <div className="flex items-start justify-between gap-4">
        <Avatar />
        <div className="flex w-full flex-col">
          <span>Jaxson Dias</span>
          <time
            dateTime={new Date().toISOString()}
            title={new Date().toUTCString()}
            className="text-sm text-gray-400"
          >
            Hoje
          </time>
        </div>
        <Rating />
      </div>

      <div className="flex gap-[1.25rem]">
        <Image
          src={''}
          alt=""
          className="h-[9.5rem] w-[6.75rem] flex-shrink-0 rounded bg-gradient-vertical"
        />

        <div className="flex flex-col gap-[1.25rem] ">
          <div className="flex w-full flex-col">
            <span className="text-heading-xs font-bold">O Hobbit</span>
            <span className="text-sm text-gray-400">J.R.R. Tolkien</span>
          </div>

          <p className="text-sm text-gray-300">
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit
            porta eget nec vitae sit vulputate eget
          </p>
        </div>
      </div>
    </div>
  )
}
