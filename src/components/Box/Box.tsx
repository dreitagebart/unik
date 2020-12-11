import React, { Children, CSSProperties } from 'react'

import { Gutter } from './Gutter'
import { _Box } from './Styled'
import { RootComponent } from '../../types'
import {
  BackgroundProp,
  MarginProp,
  AlignProp,
  AlignContentProp,
  BasisProp,
  JustifyProp,
  DirectionProp,
  BorderProp,
  ShadowProp,
  GutterProp,
  HeightProp,
  WidthProp,
  RadiusProp,
  WrapProp,
  PaddingProp,
  OverflowProp,
  SelfProp,
  GrowProp,
  ShrinkProp
} from '../../types'

export interface BoxProps extends RootComponent {
  className?: string
  style?: CSSProperties
  self?: SelfProp
  margin?: MarginProp
  align?: AlignProp
  alignContent?: AlignContentProp
  background?: BackgroundProp
  basis?: BasisProp
  border?: BorderProp
  direction?: DirectionProp
  shadow?: ShadowProp
  grow?: GrowProp
  shrink?: ShrinkProp
  gutter?: GutterProp
  height?: HeightProp
  justify?: JustifyProp
  onClick?: (...args: any[]) => any
  overflow?: OverflowProp
  padding?: PaddingProp
  radius?: RadiusProp
  width?: WidthProp
  wrap?: WrapProp
}

export const Box: React.FC<BoxProps> = ({
  className,
  radius,
  overflow,
  grow,
  shrink,
  style,
  basis,
  justify,
  align,
  alignContent,
  self,
  children,
  shadow,
  gutter,
  onClick,
  direction = 'column',
  margin,
  padding,
  background,
  height,
  width,
  wrap,
  border
}) => {
  let contents: any = children

  if (gutter) {
    contents = []

    let firstIndex: number

    Children.forEach(children, (child, index) => {
      if (child) {
        if (firstIndex === undefined) {
          firstIndex = index
        } else {
          contents.push(
            <Gutter
              key={`gutter-${index}`}
              gutter={gutter}
              direction={direction}
            />
          )
        }
      }
      contents.push(child)
    })
  }

  return (
    <_Box
      gutter={gutter}
      radius={radius}
      overflow={overflow}
      basis={basis}
      className={className}
      style={style}
      shadow={shadow}
      onClick={onClick}
      border={border}
      margin={margin}
      padding={padding}
      background={background}
      width={width}
      height={height}
      direction={direction}
      self={self}
      align={align}
      justify={justify}
      alignContent={alignContent}
      grow={grow}
      shrink={shrink}
      wrapping={wrap}
    >
      {contents}
    </_Box>
  )
}
