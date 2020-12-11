import {
  BackgroundProp,
  MarginProp,
  PaddingProp,
  BorderProp,
  RadiusProp,
  ColorProp,
  ShadowProp
} from '../../types'

interface Theme {
  background: BackgroundProp
  border: BorderProp
  color: ColorProp
}

export interface ToastTheme {
  toast: {
    shadow: ShadowProp
    margin: MarginProp
    padding: PaddingProp
    radius: RadiusProp
    error: Theme
    success: Theme
    warning: Theme
    info: Theme
  }
  container: {
    padding: PaddingProp
  }
}
