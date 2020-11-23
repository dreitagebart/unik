import {
  BackgroundProp,
  BorderProp,
  MarginProp,
  PaddingProp,
  RadiusProp,
  ShadowProp,
  TransitionProp
} from '../../types'

export interface TreeTheme {
  tree: {
    margin: MarginProp
    padding: PaddingProp
    background: BackgroundProp
    border: BorderProp
    shadow: ShadowProp
  }
  item: {
    hover: {
      background: BackgroundProp
      shadow: ShadowProp
      border: BorderProp
    }
    radius: RadiusProp
    transition: TransitionProp
    margin: MarginProp
    padding: PaddingProp
    background: BackgroundProp
    shadow: ShadowProp
    border: BorderProp
  }
}
