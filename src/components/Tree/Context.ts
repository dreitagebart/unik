import { createContext } from 'react'

import { Icon } from '../Icon'
import { DefaultTreeItem, Properties } from './Tree'

export interface TreeContext<TreeItem = DefaultTreeItem> {
  defaultIcon: React.ReactNode
  properties: Properties<TreeItem>
  // expandProp: string
  // itemsProp: string
  // keyProp: string
  // labelProp: string
  // renderItem?: (item: any) => React.ReactNode
  // renderProps?: (item: any) => any
  // onClick?: (item: any) => void
  // onExpand?: (item: any) => void
  // onCollapse?: (item: any) => void
}

export const Context = createContext<TreeContext<any>>({
  defaultIcon: Icon,
  properties: {
    render: () => null,
    key: '',
    value: '',
    items: '',
    expand: ''
  }
  // expandProp: '',
  // itemsProp: '',
  // keyProp: '',
  // labelProp: '',
  // renderItem: () => null
})

export const { Provider } = Context
