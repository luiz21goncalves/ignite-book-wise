import { InputHTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  asChild?: boolean
}

export function InputField(props: InputFieldProps) {
  const { asChild = false, ...attrs } = props

  const Component = asChild ? Slot : 'input'

  return (
    <Component
      {...attrs}
      className="h-5 w-full bg-transparent text-sm text-gray-200 caret-green-100 outline-none placeholder:text-gray-400"
    />
  )
}
