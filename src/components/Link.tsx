import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

import clsx from 'clsx'

type LinkProps = NextLinkProps & {
  children: ReactNode
  size?: 'md' | 'sm'
  variant?: 'white' | 'purple'
}

export function Link(props: LinkProps) {
  const { children, size = 'md', variant = 'white', ...attrs } = props

  return (
    <NextLink
      {...attrs}
      className={clsx(
        'px-2 py-1 flex flex-row items-center rounded-lg text-buttom-md font-bold',
        {
          'gap-3': size === 'md',
          'gap-2': size === 'sm',
          'text-gray-200 hover:bg-[#E6E8F20A]': variant === 'white',
          'text-purple-100 hover:bg-[#8381D90F]': variant === 'purple',
        },
      )}
    >
      {children}
    </NextLink>
  )
}
