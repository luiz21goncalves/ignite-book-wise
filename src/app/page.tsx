'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/constants'
import { Github, Google, RocketLaunch } from '@/icons'

import logoImage from '../assets/logo.svg'

async function handleSignInWithGithub() {
  await signIn('github')
}

export default function Home() {
  return (
    <div className="w-full h-full p-5 flex items-center justify-between gap-5">
      <div className="max-w-[598px] w-full h-full flex items-center justify-center rounded-lg bg-[url(/cover.png)] bg-origin-border bg-cover">
        <Image src={logoImage} alt="" />
      </div>

      <main className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[372px] flex flex-col gap-10">
          <div>
            <h1 className="text-heading-lg font-bold">Boas vindas!</h1>
            <p className="text-gray-200">
              Faça seu login ou acesse como visitante
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <button className="w-full flex items-center text-button-lg font-bold bg-gray-600 py-5 px-6 gap-5 rounded-lg transition-colors hover:bg-gray-500 active:bg-gray-700">
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
        </div>
      </main>
    </div>
  )
}
