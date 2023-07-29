import { useWatch } from 'react-hook-form'

export function CommentLength() {
  const comment = useWatch<{ comment: string }>({
    name: 'comment',
    defaultValue: '',
  })

  const length = comment.length

  return (
    <span className="absolute bottom-4 right-1 text-xs text-gray-400">
      {length}/450
    </span>
  )
}
