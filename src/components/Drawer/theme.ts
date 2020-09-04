import {
  ColorProp,
  BackgroundProp,
  TransitionProp,
  BorderProp,
  PaddingProp,
  MarginProp,
  ShadowProp,
  RadiusProp
} from '../../types'

export interface DrawerTheme {
  drawer: {
    transition: TransitionProp
    color: ColorProp
    border: BorderProp
    background: BackgroundProp
    padding: PaddingProp
    shadow: ShadowProp
    radius: RadiusProp
  }
  backdrop: {
    transition: TransitionProp
    background: BackgroundProp
  }
}
