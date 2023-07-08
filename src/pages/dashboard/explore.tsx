import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

import { Input } from '@/components/Input'
import { Layout } from '@/components/Layouts'
import { Sidebar } from '@/components/Sidebar'
import { Tag } from '@/components/Tag'
import { TrendingBook } from '@/components/TrendingBook'

const books = Array.from({ length: 12 }).map((_, index) => {
  const isRead = (index + 1) % 4 === 0

  return { id: index, isRead }
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
          {books.map((book) => {
            return <TrendingBook key={book.id} isRead={book.isRead} />
          })}
        </div>
      </Layout.Content>
    </Layout.Root>
  )
}
