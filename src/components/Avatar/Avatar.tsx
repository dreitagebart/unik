import React from 'react'
import {
  RootComponent,
  BackgroundProp,
  BorderProp,
  ColorProp,
  WidthProp
} from '../../types'
import styled, { css } from 'styled-components'
import {
  renderCSS,
  renderBorder,
  renderMargin,
  renderPadding,
  renderRadius,
  renderBackground,
  renderColor,
  renderShadow,
  renderHeight,
  renderWidth
} from '../../utils'

export interface AvatarProps extends RootComponent {
  contain?: boolean
  size?: WidthProp
  color?: ColorProp
  border?: BorderProp
  background?: BackgroundProp
  source?: string
  children?: string | React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

interface _AvatarProps {
  contain: boolean
  background: BackgroundProp
  border: BorderProp
  size: WidthProp
  source: string | undefined
}

const _Avatar = styled.div<_AvatarProps>`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    ${renderShadow(theme.avatar.shadow)}
    ${renderBorder(theme.avatar.border)}
    ${renderMargin(theme.avatar.margin)}
    ${renderPadding(theme.avatar.padding)}
    ${renderRadius(theme.avatar.radius)}
    ${renderBackground(theme.avatar.background)}
    ${renderColor(theme.avatar.color)}
    ${renderCSS(theme.avatar.css)}
  `}

  ${({ background, border, color, size }) => css`
    ${renderBackground(background)}
    ${renderBorder(border)}
    ${renderColor(color)}
    ${renderWidth(size)}
    ${renderHeight(size)}
  `}

  ${({ source }) =>
    source &&
    css`
      background-image: url(${source});
    `}

  ${({ contain }) =>
    contain
      ? css`
          background-size: contain;
        `
      : css`
          background-size: cover;
        `}
  background-position: center;
`

export const Avatar: React.FC<AvatarProps> = ({
  contain = false,
  border,
  background,
  id,
  style,
  className,
  children,
  source,
  color,
  onClick,
  size = 42
}) => {
  return (
    <_Avatar
      contain={contain}
      source={source}
      size={size}
      style={style}
      color={color}
      onClick={onClick}
      background={background}
      border={border}
      id={id}
      className={className}
    >
      {children}
    </_Avatar>
  )
}
