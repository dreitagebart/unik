export type Value = string | number

export type ErrorType = 'error' | 'success' | 'warning' | 'info'

type Transition = {
  property?: string
  duration?: number
  function?: string
  delay?: number
}

type Shadow = {
  hOffset: Value
  vOffset: Value
  blur?: Value
  spread?: Value
  color?: string
  inset?: boolean
}

type Position = 'absolute' | 'relative' | 'static' | 'fixed' | 'sticky'

type Border =
  | string
  | {
      size: Value
      color: string
      style: 'solid' | 'dashed' | 'dotted'
    }

type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible' | 'initial' | 'inherit'

type Background = string

type Edges = {
  top?: Value
  right?: Value
  bottom?: Value
  left?: Value
  vertical?: Value
  horizontal?: Value
}

export type ZIndexProp = number | undefined
export type LeftProp = Value | undefined
export type BottomProp = Value | undefined
export type RightProp = Value | undefined
export type TopProp = Value | undefined
export type PositionProp = Position | undefined

export type BackgroundProp = Background | undefined

export type ColorProp = string | undefined

export type AlignProp =
  | 'start'
  | 'center'
  | 'end'
  | 'baseline'
  | 'stretch'
  | 'initial'
  | 'inherit'
  | undefined

export type AlignContentProp =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'stretch'
  | 'initial'
  | 'inherit'
  | undefined

export type JustifyProp =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'initial'
  | 'inherit'
  | undefined

export type MarginProp = 'inherit' | 'auto' | Value | Edges | undefined

export type PaddingProp = 'inherit' | 'auto' | Value | Edges | undefined

export type BorderProp =
  | Border
  | {
      top?: Border
      right?: Border
      bottom?: Border
      left?: Border
    }
  | undefined

export type BasisProp = Value | 'auto' | 'initial' | 'inherit' | undefined

export type GrowProp = number | 'initial' | 'inherit' | undefined

export type ShrinkProp = number | 'initial' | 'inherit' | undefined

export type WrapProp = boolean | undefined

export type DirectionProp = 'row' | 'column' | undefined

export type TransitionProp = string | Transition

export type ShadowProp = string | 'none' | Shadow | undefined

export type FontSizeProp = Value | undefined

export type FontFamilyProp = Array<string> | undefined

export type FillProp = 'horizontal' | 'vertical' | boolean

export type GutterProp = Value | undefined

export type HeightProp =
  | Value
  | { min?: Value; max?: Value; height?: Value }
  | undefined

export type WidthProp =
  | Value
  | { min?: Value; max?: Value; width?: Value }
  | undefined

export type OverflowProp = Overflow | { x?: Overflow; y?: Overflow } | undefined

export type RadiusProp =
  | Value
  | {
      top?: Value
      right?: Value
      bottom?: Value
      left?: Value
      topLeft?: Value
      topRight?: Value
      bottomLeft?: Value
      bottomRight?: Value
    }
  | undefined

export type SelfProp =
  | 'auto'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'baseline'
  | 'initial'
  | 'inherit'
  | undefined
