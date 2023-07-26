import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { ReactNode } from 'react'

import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import githubIcon from '@/assets/github-icon.png'
import googleIcon from '@/assets/google-icon.png'

import { LoginButton } from '../LoginButton'

type SignInDialogProps = {
  children: ReactNode
}

export function SignInDialog(props: SignInDialogProps) {
  const { children } = props

  function handleGoogleSignIn() {
    signIn('google')
  }

  function handleGithubSignIn() {
    signIn('github')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-10 flex w-full max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-10 rounded-xl bg-gray-700 px-[4.5rem]  py-14  shadow-[-4px_16px_24px_0_rgba(0,0,0,0.25)]">
          <Dialog.Close className="fixed right-4 top-4 h-4 w-6 text-gray-400">
            <X weight="bold" size={24} />
          </Dialog.Close>
          <Dialog.DialogTitle className="text-center text-heading-xs font-bold text-gray-200">
            Faça login para deixar sua avaliação
          </Dialog.DialogTitle>

          <div className="flex flex-col gap-4">
            <LoginButton onClick={handleGoogleSignIn}>
              <Image src={googleIcon} alt="" />
              Entrar com Google
            </LoginButton>
            <LoginButton onClick={handleGithubSignIn}>
              <Image src={githubIcon} alt="" />
              Entrar com GitHub
            </LoginButton>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
