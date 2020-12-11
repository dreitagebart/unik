import React, { useContext } from 'react'

import { HeightProp, MarginProp, WidthProp } from '../../types'
import { Context } from './Context'
import { _Rect } from './Styled'

export interface RectProps {
  margin?: MarginProp
  width: WidthProp
  height: HeightProp
  children: any
}

export const Rect: React.FC<RectProps> = ({
  children,
  width,
  height,
  margin
}) => {
  const { loading } = useContext(Context)

  return loading ? (
    <_Rect width={width} height={height} margin={margin}></_Rect>
  ) : (
    children
  )
}
