import {
  ColorProp,
  BackgroundProp,
  PaddingProp,
  MarginProp,
  ShadowProp,
  RadiusProp,
  BorderProp,
  TransitionProp
} from '../../types'

export interface ModalTheme {
  modal: {
    transition: TransitionProp
    color: ColorProp
    border: BorderProp
    background: BackgroundProp
    padding: PaddingProp
    margin: MarginProp
    shadow: ShadowProp
    radius: RadiusProp
  }
  backdrop: {
    transition: TransitionProp
    background: BackgroundProp
  }
}
