import styled, { css } from 'styled-components'

import { FontSizeProp, ColorProp, FontFamilyProp } from '../../types'
import { renderValue, renderColor, renderFontFamily } from '../../utils'

interface _TextProps {
  uppercase: boolean
  font: FontFamilyProp
  color: ColorProp
  bold: boolean
  light: boolean
  size: FontSizeProp
}

export const _Text = styled.span<_TextProps>`
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
