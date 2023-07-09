import { Star } from '@phosphor-icons/react'

type RatingProps = {
  rate: number
}

const starts = Array.from({ length: 5 })

export function Rating(props: RatingProps) {
  const { rate } = props

  return (
    <div className="flex gap-1 text-purple-100">
      {starts.map((_, index) => {
        const isActive = index + 1 <= rate

        const weight = isActive ? 'fill' : 'bold'

        return <Star key={index} weight={weight} />
      })}
    </div>
  )
}
