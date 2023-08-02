import { User } from '@phosphor-icons/react'

import { Layout } from '@/components/Layouts'
import { Sidebar } from '@/components/Sidebar'
import { UserComments } from '@/components/UserComments'
import { UserSummary } from '@/components/UserSummary'
import { useCurrentUser } from '@/queries'

export default function Profile() {
  const { data: user } = useCurrentUser()

  return (
    <Layout.Root>
      <Sidebar />
      <Layout.Content>
        <h1 className="flex gap-3 text-heading-lg font-bold">
          <User className="h-8 w-8 text-green-100" weight="bold" />
          Perfil
        </h1>
        <main className="grid grid-cols-[624px_1fr] gap-16 pb-5">
          <UserComments userId={user?.id} />
          <UserSummary user={user!} />
        </main>
      </Layout.Content>
    </Layout.Root>
  )
}
