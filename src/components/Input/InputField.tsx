import { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>

export function InputField(props: InputFieldProps) {
  const { ...attrs } = props

  return (
    <input
      {...attrs}
      className="h-5 w-full bg-transparent text-sm text-gray-200 caret-green-100 outline-none placeholder:text-gray-400"
    />
  )
}
