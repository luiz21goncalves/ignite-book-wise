import { signOut } from 'next-auth/react'

import { SignOut } from '@phosphor-icons/react'

import { Avatar } from '../Avatar'
import { Link } from '../Link'

type SidebarSignOutLinkProps = {
  avatarUrl: string
  name: string
}

export function SidebarSignOutLink(props: SidebarSignOutLinkProps) {
  const { avatarUrl, name } = props

  function handleSignOut() {
    signOut()
  }

  return (
    <Link.Root href="" asChild>
      <button onClick={handleSignOut}>
        <Avatar src={avatarUrl} alt={`foto de perfil de ${name}`} />
        {name}
        <Link.Icon icon={SignOut} color="#F75A68" />
      </button>
    </Link.Root>
  )
}
