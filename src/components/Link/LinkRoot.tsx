import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type LinkRootProps = LinkProps & {
  children: ReactNode
  variant?: 'white' | 'purple'
  size?: 'md' | 'sm'
}

export function LinkRoot(props: LinkRootProps) {
  const { children, variant = 'white', size = 'md', ...attrs } = props

  return (
    <Link
      {...attrs}
      data-variant={variant}
      data-size={size}
      className="group flex items-center gap-3 rounded px-2 py-1 text-button-md font-bold text-gray-200 transition-colors hover:bg-[rgba(230,232,242,0.04)] data-[size=sm]:text-button-sm data-[variant=purple]:text-purple-100 data-[variant=purple]:hover:bg-[rgba(131,129,217,0.06)]"
    >
      {children}
    </Link>
  )
}
