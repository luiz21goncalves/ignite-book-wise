import Image from 'next/image'
import Link from 'next/link'

import { Binoculars, ChartLineUp } from '@phosphor-icons/react'

import logo from '@/assets/logo.svg'

import { SidebarLink } from './SidebarLink'

export function Sidebar() {
  return (
    <aside className="z-20 flex h-full w-[14.5rem] flex-col items-center justify-between rounded-xl bg-[url('/sidebar-background.png')] pb-6 pt-10">
      <Image src={logo} alt="" width={128} height={32} />

      <nav className="mt-24 flex flex-1 flex-col gap-4">
        <SidebarLink href="/dashboard" icon={ChartLineUp}>
          Início
        </SidebarLink>
        <SidebarLink href="/dashboard/explorer" icon={Binoculars}>
          Explorar
        </SidebarLink>
      </nav>

      <Link href="/">Fazer Login</Link>
    </aside>
  )
}
