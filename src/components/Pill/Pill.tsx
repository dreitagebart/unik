import React from 'react'

import { _Pill } from './Styled'

export interface PillProps {
  onClick?: () => void
}

export const Pill: React.FC<PillProps> = ({ children, onClick }) => {
  return <_Pill onClick={onClick}>{children}</_Pill>
}
