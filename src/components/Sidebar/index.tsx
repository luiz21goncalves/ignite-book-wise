import { useSession } from 'next-auth/react'
import Image from 'next/image'

import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'

import logo from '@/assets/logo.svg'

import { SidebarLink } from './SidebarLink'
import { SidebarSignInLink } from './SidebarSignInLink'
import { SidebarSignOutLink } from './SidebarSignOutLink'

export function Sidebar() {
  const { data, status } = useSession()

  const hasAuthenticated = status === 'authenticated'

  const avatarUrl = data?.user?.image!
  const name = data?.user?.name?.split(' ')[0]!

  return (
    <aside className="sticky top-0 flex h-full w-[14.5rem] flex-col items-center justify-between rounded-xl bg-[url('/sidebar-background.png')] pb-6 pt-10">
      <Image src={logo} alt="" width={128} height={32} />

      <nav className="mt-24 flex flex-1 flex-col gap-4">
        <SidebarLink href="/dashboard" icon={ChartLineUp}>
          Início
        </SidebarLink>
        <SidebarLink href="/dashboard/explore" icon={Binoculars}>
          Explorar
        </SidebarLink>
        {hasAuthenticated && (
          <SidebarLink href="/dashboard/profile" icon={User}>
            Profile
          </SidebarLink>
        )}
      </nav>
      {hasAuthenticated ? (
        <SidebarSignOutLink avatarUrl={avatarUrl} name={name} />
      ) : (
        <SidebarSignInLink />
      )}
    </aside>
  )
}
