import { MarginProp } from '@dreitagebart/box/dist/types'
import React, { useContext } from 'react'

import { WidthProp } from '../../types'
import { Context } from './Context'
import { _Circle } from './Styled'

export interface CircleProps {
  margin?: MarginProp
  size: WidthProp
  children: any
}

export const Circle: React.FC<CircleProps> = ({ children, size, margin }) => {
  const { loading } = useContext(Context)

  return loading ? <_Circle margin={margin} size={size}></_Circle> : children
}
