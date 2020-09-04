import React from 'react'
import styled, { css } from 'styled-components'

import {
  renderBorder,
  renderColor,
  renderBackground,
  renderMargin,
  renderPadding,
  renderShadow,
  renderRadius
} from '../../utils'

export interface MessageProps {
  success?: boolean
  info?: boolean
  warning?: boolean
  error?: boolean
}

interface _MessageProps {
  success: boolean
  info: boolean
  warning: boolean
  error: boolean
}

const _Message = styled.div<_MessageProps>`
  ${({ theme }) => css`
    ${renderBorder(theme.message.border)}
    ${renderMargin(theme.message.margin)}
    ${renderPadding(theme.message.padding)}
    ${renderBackground(theme.message.background)}
    ${renderShadow(theme.message.shadow)}
    ${renderRadius(theme.message.radius)}
    ${renderColor(theme.message.color)}
  `}

  ${({ success, warning, info, error, theme }) =>
    success
      ? css`
          ${renderBorder(theme.message.success.border)}
          ${renderColor(theme.message.success.color)}
          ${renderBackground(theme.message.success.background)}
        `
      : error
      ? css`
          ${renderBorder(theme.message.error.border)}
          ${renderColor(theme.message.error.color)}
          ${renderBackground(theme.message.error.background)}
        `
      : info
      ? css`
          ${renderBorder(theme.message.info.border)}
          ${renderColor(theme.message.info.color)}
          ${renderBackground(theme.message.info.background)}
        `
      : warning
      ? css`
          ${renderBorder(theme.message.warning.border)}
          ${renderColor(theme.message.warning.color)}
          ${renderBackground(theme.message.warning.background)}
        `
      : null}
`
export const Message: React.FC<MessageProps> = ({
  children,
  success = false,
  warning = false,
  error = false,
  info = false
}) => {
  return (
    <_Message info={info} success={success} warning={warning} error={error}>
      {children}
    </_Message>
  )
}
