import { Link } from '@/components/Link'
import { PageTitle } from '@/components/PageTitle'
import { ROUTES } from '@/constants'
import { CaretRight, ChartLineUp } from '@/icons'

import { Comment } from './components/Comment'
import { TrendingBookCard } from './components/TrendingBookCard'

export default function Dashboard() {
  return (
    <div className="w-full h-full">
      <PageTitle icon={ChartLineUp}>Início</PageTitle>

      <div className="grid grid-cols-[1fr_324px] gap-16 mt-10">
        <section>
          <h2 className="text-sm mb-4 font-normal">Avaliações mais recentes</h2>
          <div className="flex flex-col gap-3">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </section>

        <section>
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="text-sm font-normal">Livros populares</h2>
            <Link href={ROUTES.explore} size="sm" variant="purple">
              Ver todos <CaretRight size={16} />
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <TrendingBookCard />
            <TrendingBookCard />
            <TrendingBookCard />
            <TrendingBookCard />
            <TrendingBookCard />
            <TrendingBookCard />
          </div>
        </section>
      </div>
    </div>
  )
}
