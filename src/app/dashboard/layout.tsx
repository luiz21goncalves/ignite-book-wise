import { ReactNode } from 'react'

import { Sidebar } from './components/Sidebar'

type DashboardLayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full h-full flex overflow-auto">
      <Sidebar />

      <div className="w-full max-w-[1188px] h-full px-24 pt-[4.5rem] mx-auto">
        {children}
      </div>
    </div>
  )
}
