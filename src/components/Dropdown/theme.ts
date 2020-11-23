import {
  ColorProp,
  BackgroundProp,
  MarginProp,
  PaddingProp,
  BorderProp,
  RadiusProp,
  ShadowProp
} from '../../types'

interface Dropdown {
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

export interface DropdownTheme {
  dropdown: Dropdown
  resultList: ResultList
  item: Item
}
