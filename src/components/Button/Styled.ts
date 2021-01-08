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
  renderTransition,
  renderCSS
} from '../../utils'

interface _ButtonProps {
  primary: boolean
  plain: boolean
}

export const _Button = styled.button<_ButtonProps>`
  cursor: pointer;
  outline: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => renderTransition(theme.button.transition)}
  ${({ primary, theme, plain }) =>
    primary
      ? css`
          ${!plain && renderBorder(theme.button.primary.border)}
          ${!plain && renderBackground(theme.button.primary.background)}
          ${renderMargin(theme.button.primary.margin)}
          ${renderPadding(theme.button.primary.padding)}
          ${renderColor(theme.button.primary.color)}
          ${!plain && renderRadius(theme.button.primary.radius)}
          ${!plain && renderShadow(theme.button.primary.shadow)}
          ${renderCSS(theme.button.primary.css)}
        `
      : css`
          ${!plain && renderBorder(theme.button.default.border)}
          ${!plain && renderBackground(theme.button.default.background)}
          ${renderMargin(theme.button.default.margin)}
          ${renderPadding(theme.button.default.padding)}
          ${renderColor(theme.button.default.color)}
          ${!plain && renderRadius(theme.button.default.radius)}
          ${!plain && renderShadow(theme.button.default.shadow)}
          ${renderCSS(theme.button.default.css)}
        `}
 
  &:hover {
    ${({ primary, theme, plain }) =>
      primary
        ? css`
            ${!plain && renderBorder(theme.button.primary.hover.border)}
            ${!plain && renderBackground(theme.button.primary.hover.background)}
            ${renderMargin(theme.button.primary.hover.margin)}
            ${renderPadding(theme.button.primary.hover.padding)}
            ${renderColor(theme.button.primary.hover.color)}
            ${!plain && renderRadius(theme.button.primary.hover.radius)}
            ${!plain && renderShadow(theme.button.primary.hover.shadow)}
            ${renderCSS(theme.button.primary.hover.css)}
          `
        : css`
            ${!plain && renderBorder(theme.button.default.hover.border)}
            ${!plain && renderBackground(theme.button.default.hover.background)}
            ${renderMargin(theme.button.default.hover.margin)}
            ${renderPadding(theme.button.default.hover.padding)}
            ${renderColor(theme.button.default.hover.color)}
            ${!plain && renderRadius(theme.button.default.hover.radius)}
            ${!plain && renderShadow(theme.button.default.hover.shadow)}
            ${renderCSS(theme.button.default.hover.css)}
          `}
  }

  ${({ plain }) =>
    plain &&
    css`
      background: transparent;
      border: none;
    `}
`
