import React from 'react'

import {
  RootComponent,
  PositionProp,
  TopProp,
  LeftProp,
  BottomProp,
  RightProp,
  ZIndexProp,
  WidthProp,
  HeightProp,
  BackgroundProp
} from '../../types'
import { _Layer } from './Styled'

export interface LayerProps extends RootComponent {
  background?: BackgroundProp
  width?: WidthProp
  height?: HeightProp
  zIndex?: ZIndexProp
  position?: PositionProp
  top?: TopProp
  left?: LeftProp
  bottom?: BottomProp
  right?: RightProp
}

export const Layer: React.FC<LayerProps> = ({
  id,
  style,
  className,
  zIndex,
  position = 'static',
  background,
  top,
  left,
  bottom,
  right,
  width,
  height,
  children
}) => {
  return (
    <_Layer
      id={id}
      zIndex={zIndex}
      position={position}
      right={right}
      top={top}
      left={left}
      width={width}
      height={height}
      bottom={bottom}
      style={style}
      className={className}
      background={background}
    >
      {children}
    </_Layer>
  )
}
