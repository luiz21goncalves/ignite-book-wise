import Image from 'next/image'

import logo from '@/assets/logo.svg'

import { SignInButtons } from './SignInButtons'

export default function Home() {
  return (
    <div className="w-full h-full p-5 flex items-center justify-between gap-5">
      <div className="max-w-[598px] w-full h-full flex items-center justify-center rounded-lg overflow-hidden relative">
        <Image
          src="/cover.png"
          alt=""
          fill={true}
          placeholder="empty"
          className="absolute top-0 left-0 bottom-0 right-0 -z-10 w-full h-hull object-cover"
        />
        <Image src={logo} alt="" width={232} height={58} />
      </div>

      <main className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[372px] flex flex-col gap-10">
          <div>
            <h1 className="text-heading-lg font-bold">Boas vindas!</h1>
            <p className="text-gray-200">
              Faça seu login ou acesse como visitante
            </p>
          </div>

          <SignInButtons />
        </div>
      </main>
    </div>
  )
}
