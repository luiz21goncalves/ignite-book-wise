import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'
import dayjs from 'dayjs'

import { useUserSummary } from '@/queries'
import { User } from '@/types'

import { Avatar } from '../Avatar'

type UserSummaryProps = {
  user: User
}

export function UserSummary(props: UserSummaryProps) {
  const { user } = props

  const { data: summary } = useUserSummary({ userId: user?.id })

  const year = dayjs(user?.created_at).get('years')

  return (
    <div className="flex h-fit flex-col items-center justify-center gap-8 border-l border-l-gray-700">
      <div className="flex w-full flex-col items-center gap-5 pb-2">
        <Avatar alt="" src={user?.avatar_url!} size="lg" />
        <div className="flex flex-col items-center">
          <p className="text-heading-md font-bold">{user?.name}</p>
          <span className="text-sm text-gray-400">membro desde {year}</span>
        </div>
      </div>
      <div className="h-2 w-8 rounded-full bg-gradient-horizontal" />
      <div className="flex w-full flex-col gap-10 px-14 py-5">
        <div className="flex items-center gap-5">
          <BookOpen size={32} className="text-green-100" />
          <div className="flex flex-col">
            <span className="text-heading-xs font-bold text-gray-200">
              {summary?.pages_read}
            </span>
            <span className="text-sm text-gray-300">Páginas lidas</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Books size={32} className="text-green-100" />
          <div className="flex flex-col">
            <span className="text-heading-xs font-bold text-gray-200">
              {summary?.total_books}
            </span>
            <span className="text-sm text-gray-300">Livros avaliados</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <UserList size={32} className="text-green-100" />
          <div className="flex flex-col">
            <span className="text-heading-xs font-bold text-gray-200">
              {summary?.total_authors}
            </span>
            <span className="text-sm text-gray-300">Autores lidos</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <BookmarkSimple size={32} className="text-green-100" />
          <div className="flex flex-col">
            <span className="text-heading-xs font-bold text-gray-200">
              {summary?.most_read_category}
            </span>
            <span className="text-sm text-gray-300">Categoria mais lida</span>
          </div>
        </div>
      </div>
    </div>
  )
}
