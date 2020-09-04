import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { BorderProp } from '../../types'
import {
  renderBorder,
  renderBackground,
  renderColor,
  renderTransition
} from '../../utils'
import { Context } from './Context'

export interface RowProps {
  border?: BorderProp
}

interface _RowProps {
  border: BorderProp
  hover: boolean
}

const _Row = styled.tr<_RowProps>`
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

export const Row: React.FC<RowProps> = ({ children, border }) => {
  const { hover } = useContext(Context)

  return (
    <_Row border={border} hover={hover === 'row'}>
      {children}
    </_Row>
  )
}
