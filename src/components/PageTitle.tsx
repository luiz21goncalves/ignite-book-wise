import { Icon } from '@phosphor-icons/react'

type PageTitleProps = {
  icon: Icon
  children: string
}

export function PageTitle(props: PageTitleProps) {
  const { children, icon: Icon } = props

  return (
    <h1 className="flex flex-row items-center gap-3 text-heading-lg">
      <Icon size={32} weight="bold" className="text-green-100" />
      {children}
    </h1>
  )
}
