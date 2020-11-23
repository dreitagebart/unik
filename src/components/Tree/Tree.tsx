import React, { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

import { RootComponent } from '../../types'
import {
  renderBorder,
  renderBackground,
  renderMargin,
  renderPadding,
  renderShadow
} from '../../utils'
import { Icon } from '../Icon'
import { Provider } from './Context'
import { Item } from './Item'

// export interface TreeItem {
//   icon?: string
//   items?: Array<TreeItem>
//   expanded?: boolean
//   label: string | React.ReactNode
//   onClick?: () => void
//   onCollapse?: () => void
//   onExpand?: () => void
// }

// interface BaseTreeItem<TreeItem> {
//   label: string
//   key: string
//   children: Array<BaseTreeItem<TreeItem>>
// }

export interface TreeProps<TreeItem> extends RootComponent {
  keyProp?: string
  labelProp?: string
  itemsProp?: string
  expandProp?: string
  onClick?: (item: TreeItem) => void
  onExpand?: (item: TreeItem) => void
  onCollapse?: (item: TreeItem) => void
  renderItem: (item: TreeItem) => React.ReactNode
  items: Array<TreeItem>
  defaultIcon?: React.ReactNode
}

const _Tree = styled.div`
  ${({ theme }) => css`
    ${renderShadow(theme.tree.tree.shadow)};
    ${renderMargin(theme.tree.tree.margin)};
    ${renderPadding(theme.tree.tree.padding)};
    ${renderBackground(theme.tree.tree.background)};
    ${renderBorder(theme.tree.tree.border)};
  `}
`

export const Tree = <TreeItem,>({
  keyProp = 'key',
  itemsProp = 'items',
  labelProp = 'label',
  expandProp = 'expand',
  onClick,
  onCollapse,
  onExpand,
  renderItem,
  className,
  id,
  style,
  items,
  defaultIcon = <Icon name="file-blank"></Icon>
}: PropsWithChildren<TreeProps<TreeItem>>) => {
  return (
    <Provider
      value={{
        defaultIcon,
        itemsProp,
        labelProp,
        keyProp,
        expandProp,
        renderItem,
        onClick,
        onExpand,
        onCollapse
      }}
    >
      <_Tree style={style} id={id} className={className}>
        {items.map((item: any, index) => {
          return (
            <Item
              key={item[keyProp]}
              level={0}
              item={item}
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
    </Provider>
  )
}
