import { ReactNode } from 'react'

type InputRootProps = {
  children: ReactNode
}

export function InputRoot(props: InputRootProps) {
  const { children } = props

  return (
    <div className="peer/input-root flex w-full gap-2 rounded border border-gray-500 bg-gray-800 px-5 py-[0.875rem] text-gray-500 transition-colors focus-within:border-green-200 focus-within:text-green-100">
      {children}
    </div>
  )
}
