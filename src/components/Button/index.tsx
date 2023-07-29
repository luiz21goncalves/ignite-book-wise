import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button(props: ButtonProps) {
  const { children, className: _, ...attrs } = props

  return (
    <button
      {...attrs}
      className="flex items-center justify-center rounded bg-gray-600 p-2 text-purple-100 transition-colors enabled:hover:bg-gray-500 disabled:opacity-50"
    >
      {children}
    </button>
  )
}
