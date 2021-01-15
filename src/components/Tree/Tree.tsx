import React, { PropsWithChildren } from 'react'

import { RootComponent } from '../../types'
import { Item } from './Item'
import { _Tree } from './Styled'

export interface DefaultTreeItem {
  // items: Array<DefaultTreeItem>
  expand: boolean
  key: string
  value: string | React.ReactNode
  level: number
}

// interface BaseTreeItem<TreeItem> {
//   label: string
//   key: string
//   children: Array<BaseTreeItem<TreeItem>>
// }

export interface Properties<TreeItem = DefaultTreeItem> {
  key: string
  value: string
  // items: string
  expand: string
  level: string
  onSelect?: (item: TreeItem, event: React.MouseEvent<HTMLDivElement>) => void
  onExpand?: (item: TreeItem, event: React.MouseEvent<HTMLDivElement>) => void
  onCollapse?: (item: TreeItem, event: React.MouseEvent<HTMLDivElement>) => void
  render: (item: TreeItem) => React.ReactNode
}

export interface TreeProps<TreeItem = DefaultTreeItem> extends RootComponent {
  properties?: Properties<TreeItem>
  // keyProp?: string
  // labelProp?: string
  // itemsProp?: string
  // expandProp?: string
  // onClick?: (item: TreeItem) => void
  // onExpand?: (item: TreeItem) => void
  // onCollapse?: (item: TreeItem) => void
  // renderItem: (item: TreeItem) => React.ReactNode
  // renderProps?: (item: TreeItem) => TreeItem
  items: Array<TreeItem>
}

export const defaultProperties = {
  render: () => <div>...</div>,
  key: 'key',
  value: 'value',
  // items: 'items',
  expand: 'expand',
  level: 'level',
  onSelect: () => null,
  onExpand: () => null,
  onCollapse: () => null
}

export const Tree = <TreeItem,>({
  properties = defaultProperties,
  className,
  id,
  style,
  items
}: PropsWithChildren<TreeProps<TreeItem>>) => {
  return (
    <_Tree style={style} id={id} className={className}>
      {items.map((item: any, index) => {
        return (
          <Item<TreeItem>
            key={item[properties.key]}
            properties={properties}
            // level={item[properties.level
            item={item}
            hasChildren={hasChildren}
            // icon={item.icon}
            // items={item.items}

            // expanded={item.expanded}
            // onClick={item.onClick}
            // onExpand={item.onExpand}
            // onCollapse={item.onCollapse}
          >
            {/* {item.label} */}
          </Item>
        )
      })}
    </_Tree>
    // </Provider>
  )
}
