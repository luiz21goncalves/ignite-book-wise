import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import '@/styles/global.css'

const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-800 text-gray-100">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
