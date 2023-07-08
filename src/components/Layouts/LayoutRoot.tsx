import { ReactNode } from 'react'

type LayoutRootProps = {
  children: ReactNode
}

export function LayoutRoot(props: LayoutRootProps) {
  const { children } = props

  return (
    <div className="flex h-full w-full gap-24 overflow-y-scroll p-5">
      {children}
    </div>
  )
}
