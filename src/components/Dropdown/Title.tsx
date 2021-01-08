import React from 'react'

import { _Title } from './Styled'

export interface TitleProps {}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <_Title>{children}</_Title>
}
