import clsx from 'clsx'

type TagProps = {
  children: string
  isSelected?: boolean
}

export function Tag(props: TagProps) {
  const { children, isSelected } = props

  return (
    <button
      className={clsx(
        'py-1 px-4 border-2 rounded-full text-button-md transition-colors hover:bg-purple-200 hover:text-gray-100 hover:border-purple-100',
        {
          'bg-purple-200 text-gray-200 border-purple-200': isSelected,
          'text-purple-100 border-purple-100': !isSelected,
        },
      )}
    >
      {children}
    </button>
  )
}
