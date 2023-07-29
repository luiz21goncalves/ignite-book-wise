import Image from 'next/image'
import { useFormContext } from 'react-hook-form'

import { Star } from '@phosphor-icons/react'
import * as Slider from '@radix-ui/react-slider'

import { AssessFormData } from './AssessForm'

export function RatingInput() {
  const {
    formState: { defaultValues },
    setValue,
  } = useFormContext<AssessFormData>()

  return (
    <Slider.Root
      defaultValue={[defaultValues?.rate ?? 0]}
      min={0}
      max={5}
      step={0.5}
      className="relative flex h-7 w-[152px] touch-none select-none items-center bg-[url(/rating.png)]"
      onValueChange={(values) => {
        const rate = values[0]
        setValue('rate', rate)
      }}
    >
      <Slider.Track className="flex h-7 w-[152px] grow">
        <Slider.Range className="absolute flex h-7 cursor-pointer bg-[url(/rating-fill.png)]" />
      </Slider.Track>
      <Slider.Thumb />
    </Slider.Root>
  )
}
