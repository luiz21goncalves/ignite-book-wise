type TagProps = {
  children: string
  isSelected: boolean
  onSelect: () => void
}

export function Tag(props: TagProps) {
  const { children, isSelected, onSelect } = props

  return (
    <button
      className="flex w-fit items-center justify-center rounded-full border border-purple-100 px-4 py-1 text-purple-100 transition-colors hover:bg-purple-200 hover:text-gray-100 data-[selected=true]:bg-purple-200 data-[selected=true]:text-gray-100"
      data-selected={isSelected}
      onClick={onSelect}
      disabled={isSelected}
    >
      {children}
    </button>
  )
}
