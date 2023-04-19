import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import { Tag } from '@/components/Tag'
import { Binoculars } from '@/icons'

import { BookCard } from './components/BookCard'

export default function Explore() {
  return (
    <div className="w-full h-full">
      <header className="flex flex-row items-start justify-between">
        <PageTitle icon={Binoculars}>Explorar</PageTitle>
        <Input placeholder="Buscar livro ou autor" />
      </header>

      <div className="flex flex-row items-center gap-3 mt-10 mb-12">
        <Tag isSelected>Tudo</Tag>
        <Tag>Computação</Tag>
        <Tag>Educação</Tag>
        <Tag>Fantasia</Tag>
      </div>

      <div className="grid grid-cols-3 gap-5 pb-12">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  )
}
