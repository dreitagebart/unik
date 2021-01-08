import React from 'react'

import { ErrorType, RootComponent } from '../../types'
import { Icon } from '../Icon'
import { _Badge } from './Styled'

export interface BadgeProps extends RootComponent {
  onClose?: () => void
  close?: boolean
  circle?: boolean
  type?: ErrorType | 'default'
}

export const Badge: React.FC<BadgeProps> = ({
  id,
  style,
  className,
  children,
  close,
  onClose,
  type = 'default',
  circle = false
}) => {
  return (
    <_Badge
      id={id}
      style={style}
      className={className}
      circle={circle}
      type={type}
    >
      {children}
      <Icon
        click
        name="x"
        onClick={onClose}
        size={20}
        style={{
          marginLeft: 8,
          display: close ? 'block' : 'none'
        }}
      ></Icon>
    </_Badge>
  )
}
