import { buildPath } from '../shared/routing'
import { NavigationMenuAnyRoute } from '../Header/NavigationMenu'
import {
  AMENDMENTS_ROUTE,
  LEDGERS_ROUTE,
  NETWORK_ROUTE,
  VALIDATOR_ROUTE,
} from './routes'

const isNetwork = (path) =>
  path.indexOf(buildPath(NETWORK_ROUTE, {})) === 0 ||
  path.indexOf(buildPath(VALIDATOR_ROUTE, { identifier: '' })) === 0

// NOTE: for submenus, remove `path` field and add `children` array of objects
export const navigationConfig: NavigationMenuAnyRoute[] = [
  {
    route: LEDGERS_ROUTE,
    title: 'explorer',
    current: (path: string) => !isNetwork(path),
  },
  {
    route: NETWORK_ROUTE,
    title: 'network',
    current: (path: string) => isNetwork(path),
    children: [
      {
        route: NETWORK_ROUTE,
        title: 'nodes',
        params: { tab: 'nodes' },
      },
      {
        route: NETWORK_ROUTE,
        title: 'validators',
        params: { tab: 'validators' },
      },
      {
        route: NETWORK_ROUTE,
        title: 'upgrade_status',
        params: { tab: 'upgrade-status' },
      },
      {
        route: AMENDMENTS_ROUTE,
        title: 'amendments',
        current: (path: string) => isNetwork(path),
      },
    ],
  },
  {
    link: 'https://xrpl.org',
    title: 'xrpl_org',
  },
  {
    link: 'https://github.com/ripple/explorer',
    title: 'github',
  },
]
