import Image from 'next/image'

import { RocketLaunch } from '@phosphor-icons/react'

import githubIcon from '@/assets/github-icon.png'
import googleIcon from '@/assets/google-icon.png'
import logo from '@/assets/logo.svg'

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
            <button className="flex w-full items-center gap-5 rounded-md bg-gray-600 px-6 py-5 text-button-lg font-bold text-gray-200 transition-colors hover:bg-gray-700">
              <Image src={googleIcon} alt="" />
              Entrar com Google
            </button>
            <button className="flex w-full items-center gap-5 rounded-md bg-gray-600 px-6 py-5 text-button-lg font-bold text-gray-200 transition-colors hover:bg-gray-700">
              <Image src={githubIcon} alt="" />
              Entrar com GitHub
            </button>
            <button className="flex w-full items-center gap-5 rounded-md bg-gray-600 px-6 py-5 text-button-lg font-bold text-gray-200 transition-colors hover:bg-gray-700">
              <RocketLaunch size={32} className="text-purple-100" />
              Acessar como visitante
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
