import React from 'react'

import { Circle, CircleProps } from './Circle'
import { Context, Provider } from './Context'
import { Rect, RectProps } from './Rect'

export interface PlaceholderProps {
  loading: boolean
  speed: number
}

interface SubComponents {
  Rect: React.FC<RectProps>
  Circle: React.FC<CircleProps>
}

export const Placeholder: React.FC<PlaceholderProps> & SubComponents = ({
  loading,
  children
}) => {
  return <Provider value={{ loading }}>{children}</Provider>
}

Placeholder.Rect = Rect
Placeholder.Circle = Circle
