import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'

type LoginButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  asChild?: boolean
}

export function LoginButton(props: LoginButtonProps) {
  const { children, asChild = false, ...attrs } = props

  const Component = asChild ? Slot : 'button'

  return (
    <Component
      {...attrs}
      className="flex w-full items-center gap-5 rounded-md bg-gray-600 px-6 py-5 text-button-lg font-bold text-gray-200 transition-colors hover:bg-gray-700"
    >
      {children}
    </Component>
  )
}
