import styled, { css } from 'styled-components'

import { ButtonStyle } from './theme'
import {
  renderBackground,
  renderMargin,
  renderPadding,
  renderColor,
  renderBorder,
  renderShadow,
  renderRadius,
  renderTransition
} from '../../utils'

interface _ButtonProps {
  primary: boolean
}

export const _Button = styled.button<_ButtonProps>`
  cursor: pointer;
  outline: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => renderTransition(theme.button.transition)}
  ${({ primary, theme }) =>
    renderButton(
      primary ? theme.button.primary : theme.button.default
    )}

  &:hover {
    ${({ primary, theme }) =>
      renderButton(
        primary ? theme.button.primary.hover : theme.button.default.hover
      )}
  }
`

const renderButton = (theme: Partial<ButtonStyle>) => {
  return css`
    ${renderBorder(theme.border)}
    ${renderBackground(theme.background)}
    ${renderMargin(theme.margin)}
    ${renderPadding(theme.padding)}
    ${renderColor(theme.color)}
    ${renderRadius(theme.radius)}
    ${renderShadow(theme.shadow)}
    ${theme.css}
  `
}
