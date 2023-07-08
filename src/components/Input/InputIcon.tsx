import { ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'

type InputIconProps = {
  children: ReactNode
}

export function InputIcon(props: InputIconProps) {
  const { children } = props

  return (
    <Slot className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
      {children}
    </Slot>
  )
}
