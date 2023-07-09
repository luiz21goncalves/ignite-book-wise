import Image from 'next/image'

type AvatarProps = {
  src: string
  alt: string
}

export function Avatar(props: AvatarProps) {
  const { alt, src } = props

  return (
    <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-gradient-vertical object-cover p-[1px]">
      <Image
        src={src}
        alt={alt}
        width={36}
        height={36}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  )
}
