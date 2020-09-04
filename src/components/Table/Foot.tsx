import React from 'react'
import styled, { css } from 'styled-components'

import { renderBackground, renderColor } from '../../utils'

export interface FootProps {}

const _Foot = styled.tfoot`
  ${({ theme }) => css`
    ${renderBackground(theme.table.foot.background)}
    ${renderColor(theme.table.foot.color)}
  `}
`

export const Foot: React.FC<FootProps> = ({ children }) => {
  return <_Foot>{children}</_Foot>
}
