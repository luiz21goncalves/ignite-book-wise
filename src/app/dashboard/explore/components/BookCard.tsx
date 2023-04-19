import { Rating } from '@/components/Rating'

export function BookCard() {
  return (
    <div className="bg-gray-700 py-4 px-5 flex flex-row gap-5 rounded-lg relative overflow-hidden">
      <div className="w-[108px] h-[152px] bg-gradient-horizontal rounded flex-shrink-0" />

      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <strong className="text-heading-xs font-bold">
            A revolução dos bichos
          </strong>
          <span className="text-sm text-gray-400">George Orwell</span>
        </div>

        <Rating rating={4} />
      </div>
    </div>
  )
}
