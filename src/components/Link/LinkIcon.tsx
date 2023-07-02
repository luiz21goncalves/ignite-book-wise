import { ElementType } from 'react'

import { IconProps } from '@phosphor-icons/react'

type LinkIconProps = IconProps & {
  icon: ElementType<IconProps>
}

export function LinkIcon(props: LinkIconProps) {
  const { icon: Icon, ...attrs } = props

  return (
    <Icon
      {...attrs}
      className="h-5 w-5 group-data-[size=sm]:h-4 group-data-[size=sm]:w-4"
      weight="bold"
    />
  )
}
