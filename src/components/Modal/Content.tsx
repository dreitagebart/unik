import React from 'react'

import { _Content } from './Styled'

export interface ContentProps {}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <_Content>{children}</_Content>
}
