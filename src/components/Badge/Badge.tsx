import React from 'react'

import { ErrorType } from '../../types'
import { _Badge } from './Styled'

export interface BadgeProps {
  circle?: boolean
  type?: ErrorType | 'default'
  onClick?: () => void
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  onClick,
  type = 'default',
  circle = false
}) => {
  return (
    <_Badge circle={circle} type={type} onClick={onClick}>
      {children}
    </_Badge>
  )
}
