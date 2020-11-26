import React from 'react'

import {
  FontSizeProp,
  ColorProp,
  FontFamilyProp,
  RootComponent
} from '../../types'
import { _Text } from './Styled'

export interface TextProps extends RootComponent {
  uppercase?: boolean
  font?: FontFamilyProp
  light?: boolean
  bold?: boolean
  color?: ColorProp
  size?: FontSizeProp
  children: any
}

export const Text: React.FC<TextProps> = ({
  id,
  style,
  className,
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
      id={id}
      style={style}
      className={className}
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
