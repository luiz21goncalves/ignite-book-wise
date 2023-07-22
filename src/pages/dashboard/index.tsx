import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

import { Comment } from '@/components/Comment'
import { Layout } from '@/components/Layouts'
import { Link } from '@/components/Link'
import { Sidebar } from '@/components/Sidebar'
import { TrendingBook } from '@/components/TrendingBook'
import { useMostRecentRatings } from '@/queries'
import { useMostPopularBooks } from '@/queries/useMostPopularBooks'

export default function Dashboard() {
  const { data: mostRecentRatings } = useMostRecentRatings()
  const { data: mostPopularBooks } = useMostPopularBooks()

  return (
    <Layout.Root>
      <Sidebar />
      <Layout.Content>
        <h1 className="flex gap-3 text-heading-lg font-bold">
          <ChartLineUp className="h-8 w-8 text-green-100" weight="bold" />
          Inicio
        </h1>

        <div className="grid w-full grid-cols-[1fr_20.25rem] items-start gap-16 pb-5">
          <section className="flex flex-col gap-4">
            <h2 className="text-sm">Avaliações mais recentes</h2>
            <div className="flex flex-col gap-3">
              {mostRecentRatings?.map((rating) => {
                return <Comment key={rating.id} rating={rating} />
              })}
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
              {mostPopularBooks?.map((book) => {
                return <TrendingBook key={book.id} book={book} />
              })}
            </div>
          </section>
        </div>
      </Layout.Content>
    </Layout.Root>
  )
}
