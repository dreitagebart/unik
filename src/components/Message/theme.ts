import {
  ColorProp,
  BackgroundProp,
  BorderProp,
  RadiusProp,
  ShadowProp,
  MarginProp,
  PaddingProp
} from '../../types'

interface MessageType {
  color: ColorProp
  background: BackgroundProp
  border: BorderProp
}

export interface MessageTheme {
  color: ColorProp
  margin: MarginProp
  padding: PaddingProp
  background: BackgroundProp
  border: BorderProp
  radius: RadiusProp
  shadow: ShadowProp
  success: MessageType
  info: MessageType
  error: MessageType
  warning: MessageType
}
