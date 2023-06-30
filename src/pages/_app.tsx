import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import '@/styles/global.css'

const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <div className="w-screen h-screen bg-gray-800 text-gray-100 flex items-center justify-center">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
