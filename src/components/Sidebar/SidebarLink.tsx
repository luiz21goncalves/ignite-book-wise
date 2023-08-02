import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ElementType } from 'react'

type SidebarLinkProps = LinkProps & {
  icon: ElementType
  children: string
  shouldMatchExactHref?: boolean
}

export function SidebarLink(props: SidebarLinkProps) {
  const {
    children,
    icon: Icon,
    href,
    shouldMatchExactHref = false,
    ...attrs
  } = props

  const router = useRouter()

  let isActive = false

  if (
    shouldMatchExactHref &&
    (router.route === href || router.route === attrs.as)
  ) {
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    (router.route.startsWith(String(href)) ||
      router.route.startsWith(String(attrs.as)))
  ) {
    isActive = true
  }

  return (
    <Link
      {...attrs}
      href={href}
      data-active={isActive}
      className="data-[active=true]:before:content-[' '] relative flex items-center gap-3 py-2 text-gray-400 transition-colors hover:text-gray-100 data-[active=true]:text-button-md data-[active=true]:font-bold data-[active=true]:text-gray-100 data-[active=true]:before:absolute data-[active=true]:before:-left-4 data-[active=true]:before:h-6 data-[active=true]:before:w-1 data-[active=true]:before:rounded-full data-[active=true]:before:bg-gradient-vertical"
    >
      <Icon size={24} weight="bold" />
      {children}
    </Link>
  )
}
