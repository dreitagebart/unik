import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context, Provider } from './Context'

export interface GridRowProps {
  columns?: number
}

const _Row = styled.div``

export const Row: React.FC<GridRowProps> = ({ children, columns }) => {
  let c: number | undefined = columns
  const { columns: col } = useContext(Context)

  if (!c) {
    c = col
  }

  return (
    <Provider value={{ columns: c || 12 }}>
      <_Row>{children}</_Row>
    </Provider>
  )
}
