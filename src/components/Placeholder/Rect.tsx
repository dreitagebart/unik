import React, { useContext } from 'react'

import { Context } from './Context'
export interface RectProps {}

export const Rect: React.FC<RectProps> = ({ children }) => {
  const { loading } = useContext(Context)

  return <rect>{children}</rect>
}
