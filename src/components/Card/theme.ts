import {
  ColorProp,
  BackgroundProp,
  MarginProp,
  PaddingProp,
  ShadowProp,
  RadiusProp,
  BorderProp,
  TransitionProp
} from '../../types'

export interface CardStyle {
  border: BorderProp
  color: ColorProp
  background: BackgroundProp
  margin: MarginProp
  padding: PaddingProp
  shadow: ShadowProp
  radius: RadiusProp
}

interface HoverCard extends CardStyle {
  hover: Partial<CardStyle>
}

export interface CardTheme extends HoverCard {
  transition: TransitionProp
}
