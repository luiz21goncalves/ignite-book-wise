import { ChangeEvent, useState } from 'react'

import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

import { Input } from '@/components/Input'
import { Layout } from '@/components/Layouts'
import { Sidebar } from '@/components/Sidebar'
import { Tag } from '@/components/Tag'
import { TrendingBook } from '@/components/TrendingBook'
import { useCategories, useFilteredBooks } from '@/queries'

export default function Explore() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )
  const [query, setQuery] = useState('')

  const { data: categories } = useCategories()
  const { data: books } = useFilteredBooks({
    category: selectedCategoryId,
    q: query,
  })

  function handleSelectAllTags() {
    setSelectedCategoryId(null)
  }

  function handleChangeQueryValue(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    setQuery(value)
  }

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
            <Input.Field
              placeholder="Buscar livro ou autor"
              value={query}
              onChange={handleChangeQueryValue}
            />
            <Input.Icon>
              <MagnifyingGlass weight="bold" />
            </Input.Icon>
          </Input.Root>
        </div>

        <div className="flex flex-wrap gap-3">
          <Tag
            isSelected={selectedCategoryId === null}
            onSelect={handleSelectAllTags}
          >
            Tudo
          </Tag>

          {categories?.map((category) => {
            function handleSelect() {
              setSelectedCategoryId(category.id)
            }

            return (
              <Tag
                key={category.id}
                isSelected={selectedCategoryId === category.id}
                onSelect={handleSelect}
              >
                {category.name}
              </Tag>
            )
          })}
        </div>

        <div className="grid grid-cols-3 gap-5 pb-5">
          {books?.map((book) => {
            return <TrendingBook key={book.id} isRead={false} book={book} />
          })}
        </div>
      </Layout.Content>
    </Layout.Root>
  )
}
