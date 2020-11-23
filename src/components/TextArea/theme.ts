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

export interface TextAreaStyle {
  border: BorderProp
  color: ColorProp
  background: BackgroundProp
  margin: MarginProp
  padding: PaddingProp
  shadow: ShadowProp
  radius: RadiusProp
  css?: string
}

export interface TextAreaTheme extends TextAreaStyle {
  transition: TransitionProp
  hover: Partial<TextAreaStyle>
  focus: Partial<TextAreaStyle>
}
