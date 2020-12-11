import React from 'react'

import { Circle, CircleProps } from './Circle'
import { Provider } from './Context'
import { Rect, RectProps } from './Rect'
import { Text, TextProps } from './Text'

export interface PlaceholderProps {
  loading: boolean
  speed?: number
}

interface SubComponents {
  Text: React.FC<TextProps>
  Rect: React.FC<RectProps>
  Circle: React.FC<CircleProps>
}

export const Skeleton: React.FC<PlaceholderProps> & SubComponents = ({
  loading,
  children
}) => {
  return <Provider value={{ loading }}>{children}</Provider>
}

Skeleton.Text = Text
Skeleton.Rect = Rect
Skeleton.Circle = Circle
