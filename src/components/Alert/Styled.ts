import styled, { css } from 'styled-components'

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
import { AlertTheme } from './theme'

export type ErrorType = 'error' | 'success' | 'warning' | 'info'

interface _AlertProps {
  type: ErrorType
}

const renderMessageType = (type: ErrorType, theme: AlertTheme) => {
  switch (type) {
    case 'error': {
      return css`
        ${renderBackground(theme.error.background)}
        ${renderBorder(theme.error.border)}
        ${renderColor(theme.error.color)}
      `
    }
    case 'info': {
      return css`
        ${renderBackground(theme.info.background)}
        ${renderBorder(theme.info.border)}
        ${renderColor(theme.info.color)}
      `
    }
    case 'success': {
      return css`
        ${renderBackground(theme.success.background)}
        ${renderBorder(theme.success.border)}
        ${renderColor(theme.success.color)}
      `
    }
    case 'warning': {
      return css`
        ${renderBackground(theme.warning.background)}
        ${renderBorder(theme.warning.border)}
        ${renderColor(theme.warning.color)}
      `
    }
  }
}

export const _Alert = styled.div<_AlertProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ type, theme }) => renderMessageType(type, theme.alert)}

  ${({ theme }) => css`
    ${renderMargin(theme.alert.margin)}
    ${renderPadding(theme.alert.padding)}
    ${renderRadius(theme.alert.radius)}
    ${renderShadow(theme.alert.shadow)}
    ${renderCSS(theme.alert.css)}
  `}
`
