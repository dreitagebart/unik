import React from 'react'
import styled, { css } from 'styled-components'
import {
  renderBackground,
  renderMargin,
  renderPadding,
  renderColor
} from '../../utils'

export interface LabelProps {}

const _Label = styled.label`
  cursor: pointer;

  ${({ theme }) => css`
  ${renderBackground(theme.label.background)}
  ${renderMargin(theme.label.margin)}
  ${renderPadding(theme.label.padding)}
  ${renderColor(theme.label.color)}
  `}
`

export const Label: React.FC<LabelProps> = ({ children }) => {
  return <_Label>{children}</_Label>
}
