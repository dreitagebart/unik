import {
  ColorProp,
  BackgroundProp,
  RadiusProp,
  BorderProp,
  MarginProp,
  PaddingProp,
  ShadowProp
} from '../../types'

interface Theme {
  border: BorderProp
  color: ColorProp
  background: BackgroundProp
}

export interface BadgeTheme {
  error: Theme
  success: Theme
  warning: Theme
  info: Theme
  default: Theme
  radius: RadiusProp
  margin: MarginProp
  padding: PaddingProp
  shadow: ShadowProp
  css?: string
}
