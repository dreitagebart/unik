import React from 'react'
import styled, { css } from 'styled-components'

import { renderBackground, renderColor } from '../../utils'

export interface BodyProps {}

const _Body = styled.tbody`
  ${({ theme }) => css`
    ${renderBackground(theme.table.body.background)}
    ${renderColor(theme.table.body.color)}
  `}
`

export const Body: React.FC<BodyProps> = ({ children }) => {
  return <_Body>{children}</_Body>
}
