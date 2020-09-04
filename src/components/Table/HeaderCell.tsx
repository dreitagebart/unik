import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { PaddingProp, BorderProp } from '../../types'
import { Context } from './Context'
import {
  renderPadding,
  renderBorder,
  renderBackground,
  renderColor,
  renderTransition
} from '../../utils'

export interface HeaderCellProps {
  padding?: PaddingProp
  border?: BorderProp
  align?: 'left' | 'center' | 'right'
}

interface _HeaderCellProps {
  align: 'left' | 'center' | 'right'
  padding: PaddingProp
  border: BorderProp
  hover: boolean
}

const _HeaderCell = styled.th<_HeaderCellProps>`
  border-collapse: collapse;
  text-align: ${({ align }) => align};

  ${({ padding }) => renderPadding(padding)}
  ${({ border }) => renderBorder(border)}
  ${({ theme }) => renderTransition(theme.table.transition)}

  ${({ theme, hover }) =>
    hover &&
    css`
      &:hover {
        ${renderBackground(theme.table.hover.background)}
        ${renderColor(theme.table.hover.color)}
      }
    `}
`

export const HeaderCell: React.FC<HeaderCellProps> = ({
  border,
  padding,
  children,
  align = 'left'
}) => {
  const { cellPadding, cellBorder, hover } = useContext(Context)

  return (
    <_HeaderCell
      hover={hover === 'cell'}
      padding={padding || cellPadding}
      border={border || cellBorder}
      align={align}
    >
      {children}
    </_HeaderCell>
  )
}
