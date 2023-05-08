'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

import { ROUTES } from '@/constants'
import { Github, Google, RocketLaunch } from '@/icons'

export function SignInButtons() {
  async function handleSignInWithGithub() {
    await signIn('github')
  }

  async function handleSignInWithGoogle() {
    await signIn('google')
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <button
        className="w-full flex items-center text-button-lg font-bold bg-gray-600 py-5 px-6 gap-5 rounded-lg transition-colors hover:bg-gray-500 active:bg-gray-700"
        onClick={handleSignInWithGoogle}
      >
        <Google />
        Entrar com Google
      </button>

      <button
        className="w-full flex items-center text-button-lg font-bold bg-gray-600 py-5 px-6 gap-5 rounded-lg transition-colors hover:bg-gray-500 active:bg-gray-700"
        onClick={handleSignInWithGithub}
      >
        <Github />
        Entrar com Github
      </button>

      <Link
        href={ROUTES.dashboard}
        className="w-full flex items-center text-button-lg font-bold bg-gray-600 py-5 px-6 gap-5 rounded-lg transition-colors hover:bg-gray-500 active:bg-gray-700"
      >
        <RocketLaunch size={32} className="text-purple-100" />
        Acessar como visitante
      </Link>
    </div>
  )
}
