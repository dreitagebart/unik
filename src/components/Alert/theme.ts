import {
  ColorProp,
  BackgroundProp,
  MarginProp,
  PaddingProp,
  BorderProp,
  RadiusProp,
  ShadowProp
} from '../../types'

export interface AlertTheme {
  error: {
    color: ColorProp
    border: BorderProp
    background: BackgroundProp
  }
  success: {
    color: ColorProp
    border: BorderProp
    background: BackgroundProp
  }
  info: {
    color: ColorProp
    border: BorderProp
    background: BackgroundProp
  }
  warning: {
    color: ColorProp
    border: BorderProp
    background: BackgroundProp
  }
  css?: string
  margin: MarginProp
  padding: PaddingProp
  radius: RadiusProp
  shadow: ShadowProp
}
