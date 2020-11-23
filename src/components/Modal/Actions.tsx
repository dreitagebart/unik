import React from 'react'

import { _Actions } from './Styled'

export interface ActionsProps {}

export const Actions: React.FC<ActionsProps> = ({ children }) => {
  return <_Actions>{children}</_Actions>
}
