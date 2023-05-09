import { getServerSession } from 'next-auth/next'
import Image from 'next/image'

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import logo from '@/assets/logo.svg'
import { Link } from '@/components/Link'
import { ROUTES, SIDEBAR_NAVIGATION } from '@/constants'
import { SignIn, SignOut } from '@/icons'

import { LinkNavigation } from './LinkNavigation'

export async function Sidebar() {
  const session = await getServerSession(nextAuthOptions)

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

        {session ? (
          <Link href="/logout">
            <div className="h-8 w-8 rounded-full overflow-hidden bg-gradient-vertical p-[2px] flex justify-center items-center">
              <Image
                src={session.user?.image ?? ''}
                alt={`avatar de ${session.user?.name}`}
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            {session.user?.name?.split(' ').at(0)}
            <SignOut size={20} className="text-red-500" />
          </Link>
        ) : (
          <Link href={ROUTES.login}>
            Fazer login
            <SignIn size={20} className="text-green-100" />
          </Link>
        )}
      </div>
    </aside>
  )
}
