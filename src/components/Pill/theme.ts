import {
  ColorProp,
  BackgroundProp,
  RadiusProp,
  BorderProp,
  MarginProp,
  PaddingProp
} from '../../types'

export interface PillTheme {
  radius: RadiusProp
  border: BorderProp
  color: ColorProp
  background: BackgroundProp
  margin: MarginProp
  padding: PaddingProp
  css?: string
}
