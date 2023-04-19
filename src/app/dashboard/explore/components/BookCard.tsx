import { Rating } from '@/components/Rating'

type BookCardProps = {
  isRead?: boolean
}

export function BookCard(props: BookCardProps) {
  const { isRead = false } = props

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
      {isRead && (
        <span className="py-1 px-3 bg-green-300 text-green-100 text-xs font-bold uppercase leading-tight absolute rounded-tr-xl rounded-bl-xl top-0 right-0">
          Lido
        </span>
      )}
    </div>
  )
}
