import React from 'react'

import { _Actions } from './Styled'

export interface ActionsProps {
  align?: 'left' | 'center' | 'right'
}

export const Actions: React.FC<ActionsProps> = ({
  children,
  align = 'right'
}) => {
  return <_Actions align={align}>{children}</_Actions>
}
