import { FlattenSimpleInterpolation } from 'styled-components'
import {
  ColorProp,
  BackgroundProp,
  MarginProp,
  PaddingProp,
  ShadowProp,
  RadiusProp,
  BorderProp,
  TransitionProp
} from '../../types'

export interface ButtonStyle {
  border: BorderProp
  color: ColorProp
  background: BackgroundProp
  margin: MarginProp
  padding: PaddingProp
  shadow: ShadowProp
  radius: RadiusProp
  css?: string
}

interface HoverButton extends ButtonStyle {
  hover: Partial<ButtonStyle>
}

export interface ButtonTheme {
  transition: TransitionProp
  default: HoverButton
  primary: HoverButton
}
