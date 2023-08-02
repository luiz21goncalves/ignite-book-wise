import { useRouter } from 'next/router'

import { CaretLeft } from '@phosphor-icons/react'

import { Layout } from '@/components/Layouts'
import { Sidebar } from '@/components/Sidebar'
import { UserComments } from '@/components/UserComments'
import { UserSummary } from '@/components/UserSummary'
import { useUser } from '@/queries'

export default function Profile() {
  const router = useRouter()

  const userId = router.query.userId as string

  const { data: user } = useUser({ userId })

  return (
    <Layout.Root>
      <Sidebar />
      <Layout.Content>
        <h1 className="flex gap-3 text-heading-lg font-bold">
          <CaretLeft
            className="h-8 w-8 cursor-pointer text-gray-100"
            weight="bold"
            onClick={router.back}
          />
          Voltar
        </h1>
        <main className="grid grid-cols-[624px_1fr] gap-16 pb-5">
          <UserComments userId={user?.id} />
          <UserSummary user={user!} />
        </main>
      </Layout.Content>
    </Layout.Root>
  )
}
