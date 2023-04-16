import { Rating } from '@/components/Rating'

export function TrendingBooks() {
  return (
    <article className="flex flex-row px-5 py-4 gap-5 bg-gray-700 rounded-lg border-2 border-transparent transition-colors hover:border-gray-600">
      <div className="w-[64px] h-[94px] bg-gradient-vertical flex-shrink-0 rounded" />

      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <strong className="text-heading-sx font-bold">
            A revolução dos bichos
          </strong>
          <span className="text-sm text-gray-400">George Orwell</span>
        </div>

        <Rating rating={4} />
      </div>
    </article>
  )
}
