import styled, { css } from 'styled-components'
import { ErrorType } from '../../types'

import {
  renderBackground,
  renderBorder,
  renderColor,
  renderCSS,
  renderMargin,
  renderPadding,
  renderRadius,
  renderShadow
} from '../../utils'

interface _BadgeProps {
  circle: boolean
  type: ErrorType | 'default'
}

export const _Badge = styled.span<_BadgeProps>`
  word-break: keep-all;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme, circle }) => css`
    ${renderMargin(theme.badge.margin)}
    ${renderPadding(theme.badge.padding)}
    ${renderShadow(theme.badge.shadow)}
    ${renderCSS(theme.badge.css)}

    ${circle
      ? css`
          border-radius: 100%;
        `
      : renderRadius(theme.badge.radius)}
  `}

  ${({ type, theme }) => {
    switch (type) {
      case 'error': {
        return css`
          ${renderBorder(theme.badge.error.border)}
          ${renderBackground(theme.badge.error.background)}
          ${renderColor(theme.badge.error.color)}
        `
      }
      case 'success': {
        return css`
          ${renderBorder(theme.badge.success.border)}
          ${renderBackground(theme.badge.success.background)}
          ${renderColor(theme.badge.success.color)}
        `
      }
      case 'info': {
        return css`
          ${renderBorder(theme.badge.info.border)}
          ${renderBackground(theme.badge.info.background)}
          ${renderColor(theme.badge.info.color)}
        `
      }
      case 'warning': {
        return css`
          ${renderBorder(theme.badge.warning.border)}
          ${renderBackground(theme.badge.warning.background)}
          ${renderColor(theme.badge.warning.color)}
        `
      }
      case 'default': {
        return css`
          ${renderBorder(theme.badge.default.border)}
          ${renderBackground(theme.badge.default.background)}
          ${renderColor(theme.badge.default.color)}
        `
      }
    }
  }}
`
