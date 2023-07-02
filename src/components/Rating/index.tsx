import { Star } from '@phosphor-icons/react'

export function Rating() {
  return (
    <div className="flex gap-1 text-purple-100">
      <Star weight="fill" />
      <Star weight="fill" />
      <Star weight="fill" />
      <Star weight="fill" />
      <Star weight="bold" />
    </div>
  )
}
