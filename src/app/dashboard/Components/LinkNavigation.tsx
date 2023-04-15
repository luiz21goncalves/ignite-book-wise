'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import clsx from 'clsx'

type LinkNavigationProps = LinkProps & {
  children: ReactNode
}

export function LinkNavigation(props: LinkNavigationProps) {
  const { children, href, ...attrs } = props

  const pathname = usePathname()

  const isActive = href === pathname

  return (
    <Link
      {...attrs}
      href={href}
      className={clsx(
        'text-md flex flex-row items-center gap-3 py-2 transition-colors hover:text-gray-100 relative',
        {
          'font-bold before:content-[""] before:w-1 before:h-6 before:bg-gradient-vertical before:rounded before:absolute before:-left-4 text-gray-100':
            isActive,
          'text-gray-400': !isActive,
        },
      )}
    >
      {children}
    </Link>
  )
}
