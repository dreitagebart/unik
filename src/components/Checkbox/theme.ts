import {
  ColorProp,
  BackgroundProp,
  ShadowProp,
  BorderProp,
  RadiusProp,
  MarginProp,
  TransitionProp
} from '../../types'

export interface CheckboxTheme {
  css?: string
  transition: TransitionProp
  margin: MarginProp
  radius: RadiusProp
  shadow: ShadowProp
  color: ColorProp
  active: {
    border: BorderProp
    background: BackgroundProp
  }
  inactive: {
    border: BorderProp
    background: BackgroundProp
  }
}
