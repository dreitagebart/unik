import {
  ColorProp,
  BackgroundProp,
  MarginProp,
  BorderProp,
  TransitionProp
} from '../../types'

export interface TableTheme {
  transition: TransitionProp
  hover: {
    background: BackgroundProp
    color: ColorProp
  }
  table: {
    margin: MarginProp
  }
  head: {
    color: ColorProp
    background: BackgroundProp
  }
  body: {
    color: ColorProp
    background: BackgroundProp
  }
  foot: {
    color: ColorProp
    background: BackgroundProp
  }
}
