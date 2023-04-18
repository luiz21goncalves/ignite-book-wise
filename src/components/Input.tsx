import { InputHTMLAttributes } from 'react'

import { MagnifyingGlass } from '@/icons'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  const { ...attrs } = props

  return (
    <div className="w-full max-w-md flex-shrink-0 py-[0.875rem] px-5 flex flex-row items-center justify-between rounded border-[1px] border-gray-500 focus-within:border-green-200 group">
      <input
        {...attrs}
        className="bg-transparent outline-none flex-1 text-sm placeholder:text-gray-400 caret-green-100"
        autoComplete="off"
        autoCorrect="off"
      />

      <MagnifyingGlass
        size={20}
        className="text-gray-500 group-focus-within:text-green-200"
      />
    </div>
  )
}
