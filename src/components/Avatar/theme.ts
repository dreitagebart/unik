import {
  ColorProp,
  BackgroundProp,
  MarginProp,
  PaddingProp,
  BorderProp,
  RadiusProp,
  ShadowProp
} from '../../types'

export interface AvatarTheme {
  css?: string
  color: ColorProp
  background: BackgroundProp
  margin: MarginProp
  padding: PaddingProp
  border: BorderProp
  radius: RadiusProp
  shadow: ShadowProp
}
