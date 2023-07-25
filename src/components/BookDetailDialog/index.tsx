import { ReactNode } from 'react'

import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { Book } from '@/types'

import { BookDetail } from './BookDetail'
import { BookDetailProvider } from './BookDetailContext'
import { CommentList } from './CommentList'

type BookDetailDialogProps = {
  children: ReactNode
  book: Book
  rate: number
}

export function BookDetailDialog(props: BookDetailDialogProps) {
  const { children, book, rate } = props

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed bottom-0 right-0 top-0 z-10 flex h-screen w-full max-w-2xl flex-col gap-10 overflow-y-scroll bg-gray-800 p-12 py-16 shadow-[-4px_0_30px_0_rgba(0,0,0,0.5)]">
          <Dialog.Close className="fixed right-12 top-6 h-4 w-6 text-gray-400">
            <X weight="bold" size={24} />
          </Dialog.Close>
          <BookDetailProvider book={book} rate={rate}>
            <BookDetail />
            <CommentList />
          </BookDetailProvider>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
