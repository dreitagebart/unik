import React from 'react'
import styled, { css } from 'styled-components'

import { RowProps, Row } from './Row'
import { HeaderCellProps, HeaderCell } from './HeaderCell'
import { CellProps, Cell } from './Cell'
import { HeadProps, Head } from './Head'
import { BodyProps, Body } from './Body'
import { FootProps, Foot } from './Foot'
import { WidthProp, PaddingProp, BorderProp } from '../../types'
import { Provider } from './Context'
import {
  renderWidth,
  renderBorder,
  renderMargin,
  renderRadius,
  renderTransition
} from '../../utils'

export interface TableProps {
  hover?: 'cell' | 'row' | 'none'
  border?: BorderProp
  children: any
  cellPadding?: PaddingProp
  cellBorder?: BorderProp
  width?: string | number
}

interface _TableProps {
  border: BorderProp
  width: WidthProp
}

interface SubComponents {
  Row: React.FC<RowProps>
  HeaderCell: React.FC<HeaderCellProps>
  Cell: React.FC<CellProps>
  Head: React.FC<HeadProps>
  Body: React.FC<BodyProps>
  Foot: React.FC<FootProps>
}

const _Table = styled.table<_TableProps>`
  border-collapse: collapse;
  ${({ width, border }) => css`
    ${renderWidth(width)}
    ${renderBorder(border)}
  `}

  ${({ theme }) =>
    css`
      ${renderTransition(theme.table.transition)}
      ${renderMargin(theme.table.table.margin)}
    `}
`

export const Table: React.FC<TableProps> & SubComponents = ({
  hover = 'none',
  border,
  cellPadding = 8,
  cellBorder,
  children,
  width = '100%'
}) => {
  return (
    <Provider value={{ cellPadding, cellBorder, hover }}>
      <_Table border={border} width={width}>
        {children}
      </_Table>
    </Provider>
  )
}

Table.Row = Row
Table.HeaderCell = HeaderCell
Table.Cell = Cell
Table.Head = Head
Table.Body = Body
Table.Foot = Foot
