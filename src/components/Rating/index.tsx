import { Star, StarHalf, IconProps, Icon } from '@phosphor-icons/react'
import * as Tooltip from '@radix-ui/react-tooltip'

type RatingProps = {
  rate: number
}

type StarProps = {
  icon: Icon
  props: IconProps
  id: number
}

const MAX_STAR_RATING = 5

export function Rating(props: RatingProps) {
  const { rate } = props

  const starts = makeStartArray(rate)

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex w-fit gap-1 text-purple-100">
          {starts.map((star) => {
            const Icon = star.icon
            return <Icon key={star.id} {...star.props} />
          })}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            className="rounded bg-purple-100 px-4 py-1 text-button-sm text-gray-200 data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
            sideOffset={4}
          >
            {rate} Estrelas
            <Tooltip.Arrow className="fill-purple-100" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

function makeStartArray(rate: number): StarProps[] {
  const starts = Array.from({ length: MAX_STAR_RATING }).map<StarProps>(
    (_, index) => {
      const truncatedRate = Number(rate.toFixed(1))
      const position = index + 1
      const difference = Number((truncatedRate - position).toFixed(1))
      const isCompleted = difference > 0 || difference >= -0.6
      const isHalf = difference <= -0.4 && difference >= -0.6

      console.log({ truncatedRate, position, difference })

      if (isHalf) {
        return {
          id: position,
          icon: StarHalf,
          props: {
            weight: 'fill',
          },
        }
      }

      if (isCompleted) {
        return {
          id: position,
          icon: Star,
          props: {
            weight: 'fill',
          },
        }
      }

      return {
        id: position,
        icon: Star,
        props: {
          weight: 'bold',
        },
      }
    },
  )

  return starts
}
