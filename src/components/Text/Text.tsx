import React from 'react'
import styled, { css } from 'styled-components'

import { FontSizeProp, ColorProp, FontFamilyProp } from '../../types'
import { renderValue, renderColor, renderFontFamily } from '../../utils'

export interface TextProps {
  uppercase?: boolean
  font?: FontFamilyProp
  light?: boolean
  bold?: boolean
  color?: ColorProp
  size?: FontSizeProp
  children: any
}

interface _TextProps {
  uppercase: boolean
  font: FontFamilyProp
  color: ColorProp
  bold: boolean
  light: boolean
  size: FontSizeProp
}

const _Text = styled.span<_TextProps>`
  ${({ color }) => renderColor(color)}
  ${({ font }) => renderFontFamily(font)}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

  ${({ light }) =>
    light &&
    css`
      font-weight: lighter;
    `}

  ${({ size }) =>
    size &&
    css`
      font-size: ${renderValue(size)};
    `}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}
`

export const Text: React.FC<TextProps> = ({
  children,
  uppercase = false,
  bold = false,
  light = false,
  size,
  color,
  font
}) => {
  return (
    <_Text
      bold={bold}
      light={light}
      size={size}
      color={color}
      font={font}
      uppercase={uppercase}
    >
      {children}
    </_Text>
  )
}
