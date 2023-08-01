import Image from 'next/image'

type AvatarProps = {
  src: string
  alt: string
  size?: 'md' | 'lg'
}

const SIZES = {
  md: 36,
  lg: 72,
}

export function Avatar(props: AvatarProps) {
  const { alt, src, size = 'md' } = props

  const value = SIZES[size]

  return (
    <div
      data-size={size}
      className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-gradient-vertical object-cover p-[1px] data-[size=lg]:h-[4.5rem] data-[size=lg]:w-[4.5rem] data-[size=lg]:p-[2px]"
    >
      <Image
        src={src}
        alt={alt}
        width={value}
        height={value}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  )
}
