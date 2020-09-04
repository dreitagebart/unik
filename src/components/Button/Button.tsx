import React from 'react'
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
import { RootComponent } from '../../types'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement & RootComponent> {
  primary?: boolean
  label?: string | React.ReactNode
  children?: string | React.ReactNode
}

interface _ButtonProps {
  primary: boolean
}

const _Button = styled.button<_ButtonProps>`
  cursor: pointer;
  outline: 0;

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
  `
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  children,
  label,
  primary = false
}) => {
  return (
    <_Button type={type} primary={primary} onClick={onClick}>
      {children || label}
    </_Button>
  )
}
