import React from 'react'
import styled, { css } from 'styled-components'

import { renderBackground, renderColor } from '../../utils'

export interface HeadProps {}

const _Head = styled.thead`
  ${({ theme }) => css`
    ${renderBackground(theme.table.head.background)}
    ${renderColor(theme.table.head.color)}
  `}
`

export const Head: React.FC<HeadProps> = ({ children }) => {
  return <_Head>{children}</_Head>
}
