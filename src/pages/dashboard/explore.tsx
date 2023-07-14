import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

import { Input } from '@/components/Input'
import { Layout } from '@/components/Layouts'
import { Sidebar } from '@/components/Sidebar'
import { Tag } from '@/components/Tag'
import { TrendingBook } from '@/components/TrendingBook'

const books = Array.from({ length: 12 }).map((_) => {
  const book = {
    id: '6de9f6b8-5ff4-4e06-b9f4-843eca462803',
    name: 'Refatoração',
    author: 'Martin Fowler',
    summary:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    cover_url: '/images/books/refatoracao.png',
    total_pages: 332,
    rate: '4',
    created_at: new Date(),
  }

  return { ...book }
})

export default function Explore() {
  return (
    <Layout.Root>
      <Sidebar />
      <Layout.Content>
        <div className="grid grid-cols-[1fr_25rem] items-center justify-between">
          <h1 className="flex gap-3 text-heading-lg font-bold">
            <Binoculars className="h-8 w-8 text-green-100" weight="bold" />
            Explorar
          </h1>

          <Input.Root>
            <Input.Field placeholder="Buscar livro ou autor" />
            <Input.Icon>
              <MagnifyingGlass weight="bold" />
            </Input.Icon>
          </Input.Root>
        </div>

        <div className="flex gap-3">
          <Tag isSelected onSelect={() => {}}>
            Tudo
          </Tag>
          <Tag isSelected={false} onSelect={() => {}}>
            Computação
          </Tag>
          <Tag isSelected={false} onSelect={() => {}}>
            Educação
          </Tag>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {books.map((book, index) => {
            const isRead = (index + 1) % 4 === 0
            return <TrendingBook key={book.id} isRead={isRead} book={book} />
          })}
        </div>
      </Layout.Content>
    </Layout.Root>
  )
}
