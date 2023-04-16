import { Binoculars, ChartLineUp, User, Icon } from '@/icons'

import { ROUTES } from './routes'

type SidebarLinks = {
  readonly Icon: Icon
  readonly href: string
  readonly label: string
}

export const SIDEBAR_NAVIGATION: Record<string, SidebarLinks> = {
  dashboard: {
    Icon: ChartLineUp,
    href: ROUTES.dashboard,
    label: 'Início',
  },
  explore: {
    Icon: Binoculars,
    href: ROUTES.explore,
    label: 'Explorar',
  },
  profile: {
    Icon: User,
    href: ROUTES.profile,
    label: 'Perfil',
  },
}
