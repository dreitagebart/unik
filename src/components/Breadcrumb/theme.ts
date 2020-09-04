import {
  ColorProp,
  BackgroundProp,
  BorderProp,
  MarginProp,
  PaddingProp,
  RadiusProp,
  ShadowProp
} from '../../types'

export interface BreadcrumbTheme {
  css?: string
  color: ColorProp
  background: BackgroundProp
  border: BorderProp
  margin: MarginProp
  padding: PaddingProp
  radius: RadiusProp
  shadow: ShadowProp
}
