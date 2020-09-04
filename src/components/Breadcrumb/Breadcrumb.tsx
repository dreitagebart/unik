import React, { Children, Fragment } from 'react'
import styled, { css } from 'styled-components'

import { Item, ItemProps } from './Item'
import { RootComponent } from '../../types'
import {
  renderCSS,
  renderShadow,
  renderBorder,
  renderMargin,
  renderPadding,
  renderRadius,
  renderBackground,
  renderColor
} from '../../utils'

export interface BreadcrumbProps extends RootComponent {
  children: any
}

interface SubComponents {
  Item: React.FC<ItemProps>
}

const _Breadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => css`
    ${renderCSS(theme.breadcrumb.css)}
    ${renderShadow(theme.breadcrumb.shadow)}
    ${renderBorder(theme.breadcrumb.border)}
    ${renderMargin(theme.breadcrumb.margin)}
    ${renderPadding(theme.breadcrumb.padding)}
    ${renderRadius(theme.breadcrumb.radius)}
    ${renderBackground(theme.breadcrumb.background)}
    ${renderColor(theme.breadcrumb.color)}
  `}
`

const _Separator = styled.div`
  margin: 0 8px;
`

export const Breadcrumb: React.FC<BreadcrumbProps> & SubComponents = ({
  id,
  style,
  className,
  children
}) => {
  let first = true

  const crumbs = Children.map(children, (child, index) => {
    if (index > 0) {
      first = false
    }

    if (first) return child

    return (
      <Fragment>
        <_Separator>/</_Separator>
        {child}
      </Fragment>
    )
  })

  return (
    <_Breadcrumb id={id} style={style} className={className}>
      {crumbs}
    </_Breadcrumb>
  )
}

Breadcrumb.Item = Item
