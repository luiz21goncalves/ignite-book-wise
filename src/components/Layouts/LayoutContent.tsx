import { ReactNode } from 'react'

type LayoutContentProps = {
  children: ReactNode
}

export function LayoutContent(props: LayoutContentProps) {
  const { children } = props

  return (
    <main className="flex w-full max-w-5xl flex-col gap-9 pt-[3.25rem]">
      {children}
    </main>
  )
}
