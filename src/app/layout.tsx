import { Metadata } from 'next'
import { Nunito_Sans as NunitoSans } from 'next/font/google'
import { ReactNode } from 'react'

import '@/styles/global.css'

const nunito = NunitoSans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'BookWise',
  themeColor: {
    color: '#0E1116',
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.className} w-screen h-screen bg-gray-800 text-gray-100 text-md`}
      >
        {children}
      </body>
    </html>
  )
}
