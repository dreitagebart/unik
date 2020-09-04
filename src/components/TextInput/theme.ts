import {
  ColorProp,
  BackgroundProp,
  MarginProp,
  PaddingProp,
  BorderProp,
  RadiusProp,
  ShadowProp,
  TransitionProp
} from '../../types'

export interface TextInputStyle {
  border: BorderProp
  color: ColorProp
  background: BackgroundProp
  margin: MarginProp
  padding: PaddingProp
  shadow: ShadowProp
  radius: RadiusProp
  css?: string
}

export interface TextInputTheme extends TextInputStyle {
  transition: TransitionProp
  hover: Partial<TextInputStyle>
  focus: Partial<TextInputStyle>
}
