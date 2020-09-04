import React from 'react'
import styled from 'styled-components'

import { GridRowProps, Row } from './Row'
import { GridCellProps, Cell } from './Cell'
import { Provider } from './Context'

export interface GridProps {
  columns?: number
  children: any
}

interface SubComponents {
  Row: React.FC<GridRowProps>
  Cell: React.FC<GridCellProps>
}

const _Grid = styled.div`
  box-sizing: border-box;
  width: 100%;
`

export const Grid: React.FC<GridProps> & SubComponents = ({
  children,
  columns = 12
}) => {
  return (
    <Provider value={{ columns }}>
      <_Grid>{children}</_Grid>
    </Provider>
  )
}

Grid.Row = Row
Grid.Cell = Cell
