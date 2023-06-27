import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], variable: '--default' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.variable}>
      <Component {...pageProps} />
    </div>
  )
}
