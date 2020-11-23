import { createContext } from 'react'

import { Icon } from '../Icon'

interface TreeContext {
  defaultIcon: React.ReactNode
  expandProp: string
  itemsProp: string
  keyProp: string
  labelProp: string
  renderItem?: (item: any) => React.ReactNode
  onClick?: (item: any) => void
  onExpand?: (item: any) => void
  onCollapse?: (item: any) => void
}

export const Context = createContext<TreeContext>({
  defaultIcon: Icon,
  expandProp: '',
  itemsProp: '',
  keyProp: '',
  labelProp: '',
  renderItem: () => null
})

export const { Provider } = Context
