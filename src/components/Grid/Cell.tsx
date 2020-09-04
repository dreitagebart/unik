import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from './Context'

export interface GridCellProps {
  size: number
}

interface _CellProps {
  size: number
}

const _Cell = styled.div<_CellProps>`
  width: ${({ size }) => size.toFixed(2)}%;
  float: left;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small}px) {
    background-color: lightblue;
    width: 100%;
  }
`

export const Cell: React.FC<GridCellProps> = ({ children, size }) => {
  const { columns } = useContext(Context)
  const result = (size / columns) * 100
  console.log(`size is ${size}/${columns} : ${result.toFixed(2)}`)
  return (
    <_Cell size={result}>
      {result}
      {children}
    </_Cell>
  )
}
