import Image from 'next/image'
import Link from 'next/link'

import { RocketLaunch } from '@phosphor-icons/react'

import githubIcon from '@/assets/github-icon.png'
import googleIcon from '@/assets/google-icon.png'
import logo from '@/assets/logo.svg'
import { LoginButton } from '@/components/LoginButton'

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-between gap-5 p-5">
      <div className="relative flex h-full w-[37.375rem] flex-shrink-0 items-center justify-center overflow-hidden rounded-md">
        <Image src={logo} alt="bookwise logo" className="z-10" />
        <Image
          src="/hero.png"
          className="absolute  bottom-0 left-0 right-0 top-0 h-full w-full"
          alt=""
          width={598}
          height={912}
        />
        <h1 className="hidden">BookWise</h1>
      </div>
      <div className="flex w-full justify-center">
        <main className="flex w-[23.25rem] flex-col gap-10">
          <div>
            <h2 className="text-heading-lg font-bold">Boas vindas</h2>
            <span className="text-gray-200">
              Faça seu login ou acesse como visitante
            </span>
          </div>

          <div className="flex w-full flex-col gap-4">
            <LoginButton>
              <Image src={googleIcon} alt="" />
              Entrar com Google
            </LoginButton>
            <LoginButton>
              <Image src={githubIcon} alt="" />
              Entrar com GitHub
            </LoginButton>
            <LoginButton asChild>
              <Link href="/dashboard">
                <RocketLaunch size={32} className="text-purple-100" />
                Acessar como visitante
              </Link>
            </LoginButton>
          </div>
        </main>
      </div>
    </div>
  )
}
