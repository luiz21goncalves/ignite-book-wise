import { ElementType, ReactNode } from 'react'

import { IconProps } from '@phosphor-icons/react'

import { Sidebar } from '../Sidebar'

type DashboardLayoutProps = {
  children: ReactNode
  icon: ElementType<IconProps>
  title: string
}

export function DashboardLayout(props: DashboardLayoutProps) {
  const { children, icon: Icon, title } = props

  return (
    <div className="flex h-full w-full gap-24 overflow-y-scroll p-5">
      <Sidebar />

      <main className="flex w-full max-w-5xl flex-col gap-9 pt-[3.25rem]">
        <h1 className="flex gap-3 text-heading-lg font-bold">
          <Icon className="h-8 w-8 text-green-100" weight="bold" />
          {title}
        </h1>
        {children}
      </main>
    </div>
  )
}
