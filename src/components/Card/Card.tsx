import React from 'react'
import styled, { css } from 'styled-components'
import {
  renderMargin,
  renderPadding,
  renderColor,
  renderRadius,
  renderShadow,
  renderTransition,
  renderBorder,
  renderBackground
} from '../../utils'
import { CardStyle } from './theme'

export interface CardProps {}

interface WrapperProps {}

const Wrapper = styled.div<WrapperProps>`
  ${({ theme }) => renderTransition(theme.card.transition)}
  ${({ theme }) => renderCard(theme.card)}

  &:hover {
    ${({ theme }) => renderCard(theme.card.hover)}
  }
`

const renderCard = (theme: Partial<CardStyle>) => {
  return css`
    ${renderBorder(theme.border)}
    ${renderBackground(theme.background)}
    ${renderMargin(theme.margin)}
    ${renderPadding(theme.padding)}
    ${renderColor(theme.color)}
    ${renderRadius(theme.radius)}
    ${renderShadow(theme.shadow)}
  `
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
