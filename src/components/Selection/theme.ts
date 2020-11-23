import {
  ColorProp,
  BackgroundProp,
  MarginProp,
  PaddingProp,
  BorderProp,
  RadiusProp,
  ShadowProp
} from '../../types'

interface Selection {
  color: ColorProp
  margin: MarginProp
  padding: PaddingProp
  border: BorderProp
  radius: RadiusProp
  background: BackgroundProp
  shadow: ShadowProp
}

interface ResultList {
  margin: MarginProp
  padding: PaddingProp
  border: BorderProp
  radius: RadiusProp
  background: BackgroundProp
  shadow: ShadowProp
}

interface Item {
  color: ColorProp
  margin: MarginProp
  padding: PaddingProp
  border: BorderProp
  radius: RadiusProp
  background: BackgroundProp
  shadow: ShadowProp
}

export interface SelectionTheme {
  selection: Selection
  resultList: ResultList
  item: Item
}
