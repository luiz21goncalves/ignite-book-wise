import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

import { Comment } from '@/components/Comment'
import { Link } from '@/components/Link'
import { Sidebar } from '@/components/Sidebar'
import { TrendingBooks } from '@/components/TrendingBooks'

export default function Dashboard() {
  return (
    <div className="flex h-full w-full gap-24 overflow-y-scroll p-5">
      <Sidebar />

      <main className="flex h-full w-full flex-col items-center gap-9 pt-[3.25rem]">
        <div>
          <h1 className="flex gap-3 text-heading-lg font-bold">
            <ChartLineUp className="h-8 w-8 text-green-100" weight="bold" />
            Início
          </h1>

          <div className="grid w-full max-w-5xl grid-cols-[1fr_20.25rem] items-start gap-16">
            <section className="flex flex-col gap-4">
              <h2 className="text-sm">Avaliações mais recentes</h2>
              <div className="flex flex-col gap-3">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm">Livros populares</h2>
                <Link.Root href="#" size="sm" variant="purple">
                  Ver todos <Link.Icon icon={CaretRight} />
                </Link.Root>
              </div>
              <div className="flex flex-col gap-3">
                <TrendingBooks />
                <TrendingBooks />
                <TrendingBooks />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
