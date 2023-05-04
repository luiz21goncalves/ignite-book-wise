import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import { User } from '@/icons'

import { Analytics } from './components/Analytics'
import { BookCard } from './components/BookCard'

export default function Profile() {
  return (
    <div className="w-full h-full">
      <PageTitle icon={User}>Perfil</PageTitle>

      <div className="w-full h-full mt-10 grid grid-cols-[1fr_308px] gap-16">
        <div className="pb-12">
          <Input placeholder="Buscar livro avaliado" />

          <div className="flex flex-col gap-6 mt-8">
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
        <Analytics />
      </div>
    </div>
  )
}
