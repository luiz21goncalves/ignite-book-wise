import Image from 'next/image'

export function Avatar() {
  return (
    <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-gradient-vertical p-[1px]">
      <Image
        src="https://github.com/diego3g.png"
        alt=""
        width={36}
        height={36}
        className="h-fit w-fit rounded-full"
      />
    </div>
  )
}
