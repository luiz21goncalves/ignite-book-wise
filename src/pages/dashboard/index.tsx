import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

import { Comment } from '@/components/Comment'
import { DashboardLayout } from '@/components/Layouts/DashboardLayout'
import { Link } from '@/components/Link'
import { TrendingBook } from '@/components/TrendingBook'

export default function Dashboard() {
  return (
    <DashboardLayout title="Início" icon={ChartLineUp}>
      <div className="grid w-full grid-cols-[1fr_20.25rem] items-start gap-16">
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
            <TrendingBook />
            <TrendingBook />
            <TrendingBook />
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}
