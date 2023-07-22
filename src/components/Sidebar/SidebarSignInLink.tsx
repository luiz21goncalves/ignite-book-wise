import { SignIn } from '@phosphor-icons/react'

import { Link } from '../Link'

export function SidebarSignInLink() {
  return (
    <Link.Root href="/">
      Fazer Login
      <Link.Icon icon={SignIn} color="#50B2C0" />
    </Link.Root>
  )
}
