import Image from 'next/image'

import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'

import { useBookCategories } from '@/queries'
import { Book } from '@/types'

import { Rating } from '../Rating'

type BookDetailProps = {
  book: Book
  rate: number
}

export function BookDetail(props: BookDetailProps) {
  const { book, rate } = props

  const { data: categories } = useBookCategories({ bookId: book.id })

  const categoriesNames = categories
    ?.map((category) => {
      return category.name
    })
    .join(', ')

  return (
    <div className="flex flex-col gap-10 rounded-lg bg-gray-700 px-8 py-6">
      <div className="grid grid-cols-[172px_1fr] gap-8">
        <Image
          src={book.cover_url}
          alt=""
          width={172}
          height={242}
          className="rounded-lg"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-heading-sm font-bold text-gray-100">
              {book.name}
            </p>
            <span className="text-gray-300">{book.author}</span>
          </div>

          <div>
            <Rating rate={rate} size="lg" />
            <span className="text-sm text-gray-400">3 avaliações</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-14 border-t-[1px] border-t-gray-600 py-6">
        <div className="flex items-center gap-4">
          <BookmarkSimple weight="bold" size={24} className="text-green-100" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-300">Categoria</span>
            <span className="text-heading-xs font-bold text-gray-200">
              {categoriesNames}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BookOpen weight="bold" size={24} className="text-green-100" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-300">Páginas</span>
            <span className="text-heading-xs font-bold text-gray-200">
              {book.total_pages}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
