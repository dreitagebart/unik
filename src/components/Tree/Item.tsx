import React, { PropsWithChildren, useContext, useState } from 'react'
import styled, { css } from 'styled-components'

import {
  renderBackground,
  renderBorder,
  renderMargin,
  renderPadding,
  renderRadius,
  renderShadow,
  renderTransition
} from '../../utils'
import { Icon } from '../Icon'
import { Context } from './Context'
// import { TreeItem } from './Tree'

interface TreeItemProps<TreeItem> {
  // renderItem: (item: TreeItem) => React.ReactNode
  item: any
  level: number
  // items?: Array<TreeItem>
  // expanded?: boolean
  // onClick?: () => void
  // onExpand?: () => void
  // onCollapse?: () => void
}

interface _ContentProps {
  level: number
}

interface _ItemProps {
  clickable: boolean
}

interface _ItemsProps {
  visible: boolean
}

interface _IconProps {
  expanded: boolean
}

interface _WrapperProps {
  level: number
}

const _Wrapper = styled.div<_WrapperProps>``

const _Item = styled.div<_ItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}

  ${({ theme }) => css`
    ${renderTransition(theme.tree.item.transition)}
    ${renderBackground(theme.tree.item.background)}
    ${renderMargin(theme.tree.item.margin)}
    ${renderPadding(theme.tree.item.padding)}
    ${renderBorder(theme.tree.item.border)}
    ${renderShadow(theme.tree.item.shadow)}
    ${renderRadius(theme.tree.item.radius)}

    &:hover {
      ${renderBackground(theme.tree.item.hover.background)}
      ${renderBorder(theme.tree.item.hover.border)}
      ${renderShadow(theme.tree.item.hover.shadow)}
    }
  `}
`

const _Content = styled.div<_ContentProps>`
  margin-left: 24px;
  overflow: hidden;
`

const _Label = styled.div`
  cursor: pointer;
`

const _Icon = styled(Icon)<_IconProps>`
  /* padding-right: 4px; */
  /* transition: transform 300ms ease-out;
  transform-style: preserve-3d;
  transform: rotate(${({ expanded }) => (expanded ? '90deg' : '0deg')}); */
`

const _Items = styled.div<_ItemsProps>`
  transition: all 300ms ease-in-out;

  ${({ visible }) =>
    visible
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          height: 0;
          transform: translateY(-100%);
        `}
`

export const Item = <TreeItem,>({
  item,
  // icon,
  level
}: // items = [],
// children,
// expanded = false,
// onClick,
// onCollapse,
// onExpand
PropsWithChildren<TreeItemProps<TreeItem>>) => {
  const {
    defaultIcon,
    onClick,
    onExpand,
    onCollapse,
    expandProp,
    keyProp,
    labelProp,
    itemsProp,
    renderItem
  } = useContext(Context)

  const [expand, setExpand] = useState(item[expandProp])

  const handleClick = () => {
    if (onClick) onClick(item)
  }

  const handleToggle = () => {
    if (item[itemsProp].length <= 0) return

    setExpand(!expand)

    if (expand) {
      if (onCollapse) onCollapse(item)
    } else {
      if (onExpand) onExpand(item)
    }
  }

  const hasChildren = item[itemsProp].length > 0

  return (
    <_Wrapper level={level}>
      <_Item clickable={item[itemsProp].length > 0}>
        {hasChildren ? (
          <_Icon
            expanded={hasChildren ? expand : false}
            onClick={handleToggle}
            rotate={expand ? 90 : 0}
            name="chevron-right"
          ></_Icon>
        ) : (
          defaultIcon
        )}
        <_Label onClick={handleClick}>
          {renderItem ? renderItem(item) : item[labelProp]}
        </_Label>
      </_Item>
      <_Content level={level}>
        <_Items visible={expand}>
          {item[itemsProp].map((i: any) => (
            <Item key={i[keyProp]} level={level + 1} item={i}></Item>
          ))}
        </_Items>
      </_Content>
    </_Wrapper>
  )
}
