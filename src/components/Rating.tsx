'use client'
import { useId, useMemo } from 'react'

import * as Tooltip from '@radix-ui/react-tooltip'

import { Star, StarHalf, Icon } from '@/icons'

type RatingProps = {
  rating: number
}

const MAX_RATING = 5

type Start = {
  id: string
  Icon: Icon
  weight: 'bold' | 'fill'
  ratingWithOneFloatingPoint: number
}

export function Rating(props: RatingProps) {
  const { rating } = props
  const id = useId()

  const ratingWithOneFloatingPoint = Number(rating.toFixed(1))

  const stars = useMemo<Start[]>(() => {
    return Array.from({ length: MAX_RATING }).map((_, index) => {
      const position = index + 1
      const isHalfPosition = Math.ceil(rating) - position === 0
      const diference = isHalfPosition
        ? Math.abs(Number((ratingWithOneFloatingPoint - position).toFixed(1)))
        : 0
      const hasMinimumAmountForHalfRating = diference >= 0.4
      const hasMaximumAmountForHalfRating = diference <= 0.6
      const isHalf =
        hasMinimumAmountForHalfRating && hasMaximumAmountForHalfRating
      const isActive =
        position <= ratingWithOneFloatingPoint ||
        (isHalfPosition && !isHalf && !hasMinimumAmountForHalfRating)

      if (isHalf) {
        return {
          id: `${id}-${index}`,
          Icon: StarHalf,
          weight: 'fill',
          ratingWithOneFloatingPoint,
        }
      }

      if (isActive) {
        return {
          id: `${id}-${index}`,
          Icon: Star,
          weight: 'fill',
          ratingWithOneFloatingPoint,
        }
      }

      return {
        id: `${id}-${index}`,
        weight: 'bold',
        Icon: Star,
        ratingWithOneFloatingPoint,
      }
    })
  }, [rating, id, ratingWithOneFloatingPoint])

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex flex-row gap-1 w-fit text-purple-100">
          {stars.map(({ Icon, weight }, index) => {
            return <Icon key={index} size={16} weight={weight} />
          })}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded bg-gray-600 px-3 py-2 will-change-[transform,opacity]"
            sideOffset={5}
          >
            pontuação {ratingWithOneFloatingPoint}
            <Tooltip.Arrow className="fill-gray-600" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
