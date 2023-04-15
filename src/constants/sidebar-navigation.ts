import { Binoculars, ChartLineUp, User, Icon } from '@/icons'

type SidebarLinks = {
  readonly Icon: Icon
  readonly href: string
  readonly label: string
}

export const SIDEBAR_NAVIGATION: Record<string, SidebarLinks> = {
  dashboard: {
    Icon: ChartLineUp,
    href: '/dashboard',
    label: 'Início',
  },
  explore: {
    Icon: Binoculars,
    href: '/dashboard/explore',
    label: 'Explorar',
  },
  profile: {
    Icon: User,
    href: '/dashboard/profile',
    label: 'Perfil',
  },
}
