import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { Link } from '@/components/Link'
import { ROUTES, SIDEBAR_NAVIGATION } from '@/constants'
import { SignIn } from '@/icons'

import { LinkNavigation } from './LinkNavigation'

export function Sidebar() {
  return (
    <aside className="w-fit h-full py-5 pl-5 sticky top-0">
      <div className="w-[232px] h-full pb-6 px-6 pt-10 flex flex-col bg-[url(/background.png)] items-center justify-between rounded-xl relative">
        <Image src={logo} alt="" width={128} height={32} />

        <nav className="flex-1 mt-16 flex flex-col gap-4">
          {Object.entries(SIDEBAR_NAVIGATION).map(
            ([key, { Icon, href, label }]) => {
              return (
                <LinkNavigation key={key} href={href}>
                  <Icon size={24} /> {label}
                </LinkNavigation>
              )
            },
          )}
        </nav>

        <Link href={ROUTES.login}>
          Fazer login
          <SignIn size={20} className="text-green-100" />
        </Link>
      </div>
    </aside>
  )
}
