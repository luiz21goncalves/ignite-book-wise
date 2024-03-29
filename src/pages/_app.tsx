import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/lib/query-client'

import '@/styles/global.css'
import '@/lib/dayjs'

const nunito = Nunito({ subsets: ['latin'] })

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={nunito.className}>
          <div className="flex h-screen w-screen items-center justify-center bg-gray-800 text-gray-100">
            <Component {...pageProps} />
          </div>
        </div>
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
