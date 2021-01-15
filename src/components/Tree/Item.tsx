import React, { PropsWithChildren, useCallback } from 'react'

import { Icon } from '../Icon'
import { _Content, _Icon, _Item, _Items, _Label, _Wrapper } from './Styled'
import { defaultProperties, DefaultTreeItem, Properties } from './Tree'

interface TreeItemProps<TreeItem = DefaultTreeItem> {
  properties: Properties<TreeItem>
  item: any
  hasChildren: boolean
}

export const Item = <TreeItem,>({
  properties = defaultProperties,
  item,
  hasChildren
}: PropsWithChildren<TreeItemProps<TreeItem>>) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (properties.onSelect) properties.onSelect(item, event)
    },
    [properties.onSelect]
  )

  const handleToggle = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!hasChildren) return

      if (item[properties.expand]) {
        if (properties.onCollapse) {
          properties.onCollapse(item, event)
        }
      } else {
        if (properties.onExpand) {
          properties.onExpand(item, event)
        }
      }
    },
    [item, properties, hasChildren]
  )

  // const hasChildren = item[properties.items].length > 0

  return (
    <_Wrapper level={item[properties.level]}>
      <_Item clickable={hasChildren}>
        {hasChildren ? (
          <_Icon
            expanded={hasChildren ? item[properties.expand] : false}
            onClick={(event) =>
              handleToggle(event as React.MouseEvent<HTMLDivElement>)
            }
            rotate={item[properties.expand] ? 90 : 0}
            name="chevron-right"
          ></_Icon>
        ) : (
          <Icon name="file-blank"></Icon>
        )}
        <_Label onClick={handleClick}>{properties.render(item)}</_Label>
      </_Item>
      <_Content level={item[properties.level]}>
        <_Items visible={item[properties.expand]}>
          {item[properties.items].map((i: any) => (
            <Item<TreeItem>
              properties={properties}
              key={i[properties.key]}
              level={level + 1}
              item={i}
            ></Item>
          ))}
        </_Items>
      </_Content>
    </_Wrapper>
  )
}
