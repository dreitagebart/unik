import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { PaddingProp, BorderProp } from '../../types'
import {
  renderPadding,
  renderBorder,
  renderBackground,
  renderColor,
  renderTransition
} from '../../utils'
import { Context } from './Context'

export interface CellProps {
  align?: 'left' | 'center' | 'right'
  padding?: PaddingProp
  border?: BorderProp
  colSpan?: number
}

interface _CellProps {
  align: 'left' | 'center' | 'right'
  padding: PaddingProp
  border: BorderProp
  hover: boolean
}

const _Cell = styled.td<_CellProps>`
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

export const Cell: React.FC<CellProps> = ({
  children,
  colSpan,
  padding,
  border,
  align = 'left'
}) => {
  const { cellPadding, cellBorder, hover } = useContext(Context)

  return (
    <_Cell
      hover={hover === 'cell'}
      border={border || cellBorder}
      align={align}
      padding={padding || cellPadding}
      colSpan={colSpan}
    >
      {children}
    </_Cell>
  )
}
