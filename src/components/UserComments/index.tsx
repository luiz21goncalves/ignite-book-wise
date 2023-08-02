import { useState } from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { useUserRatings } from '@/queries'

import { Input } from '../Input'
import { Comment } from './Comment'

type UserCommentsProps = {
  userId?: string
}

export function UserComments(props: UserCommentsProps) {
  const { userId } = props
  const [book, setBook] = useState('')

  const { data: ratings } = useUserRatings({ userId, q: book })

  return (
    <div className="flex w-full flex-col gap-8">
      <Input.Root>
        <Input.Field
          placeholder="Buscar livro avaliado"
          value={book}
          onChange={(event) => setBook(event.target.value)}
        />
        <Input.Icon>
          <MagnifyingGlass />
        </Input.Icon>
      </Input.Root>
      <div className="flex flex-col gap-4">
        {ratings?.map((rating) => {
          return <Comment key={rating.id} rating={rating} />
        })}
      </div>
    </div>
  )
}
