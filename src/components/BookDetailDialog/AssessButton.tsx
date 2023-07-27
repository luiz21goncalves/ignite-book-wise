import { useSession } from 'next-auth/react'

import { Link } from '../Link'
import { SignInDialog } from '../SignInDialog'

type AssessButtonProps = {
  onToggleForm: () => void
}

export function AssessButton(props: AssessButtonProps) {
  const { onToggleForm } = props

  const { status } = useSession()

  const isAuthenticated = status === 'authenticated'

  if (isAuthenticated) {
    return (
      <Link.Root asChild href="#" variant="purple">
        <button onClick={onToggleForm}>Avaliar</button>
      </Link.Root>
    )
  }

  return (
    <SignInDialog>
      <Link.Root href="#" variant="purple">
        Avaliar
      </Link.Root>
    </SignInDialog>
  )
}
