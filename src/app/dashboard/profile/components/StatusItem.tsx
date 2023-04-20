import { Icon } from '@/icons'

type StatusItemProps = {
  icon: Icon
  title: number | string
  label: string
}

export function StatusItem(props: StatusItemProps) {
  const { icon: Icon, label, title } = props

  return (
    <div className="w-full flex flex-row gap-5 items-center">
      <Icon className="text-green-100" size={32} />

      <div>
        <span className="text-heading-xs font-bold text-gray-200">{title}</span>
        <p className="text-sm text-gray-300">{label}</p>
      </div>
    </div>
  )
}
