import React from 'react'
import 'boxicons'

import { RootComponent } from '../../types'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'box-icon': any
    }
  }
}

export interface IconProps extends RootComponent {
  click?: boolean
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  type?: 'regular' | 'solid' | 'logo'
  name: string
  color?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | string | number
  rotate?: number
  flip?: 'horizontal' | 'vertical'
  border?: 'square' | 'circle'
  animation?:
    | 'spin'
    | 'tada'
    | 'flashing'
    | 'burst'
    | 'fade-left'
    | 'fade-right'
    | 'spin-hover'
    | 'tada-hover'
    | 'flashing-hover'
    | 'burst-hover'
    | 'fade-left-hover'
    | 'fade-right-hover'
  pull?: 'left' | 'right'
}

export const Icon: React.FC<IconProps> = ({
  click = false,
  id,
  style,
  className,
  name,
  type = 'regular',
  animation,
  border,
  flip,
  pull,
  rotate,
  size,
  color,
  onMouseDown,
  onClick
}) => {
  let iconSize = size

  if (typeof size === 'number') {
    iconSize = `${size}px`
  }

  return (
    <box-icon
      id={id}
      style={{ ...style, cursor: click ? 'pointer' : undefined }}
      className={className}
      onMouseDown={onMouseDown}
      onClick={onClick}
      size={iconSize}
      color={color}
      flip={flip}
      rotate={rotate}
      pull={pull}
      border={border}
      animation={animation}
      name={name}
      type={type}
    ></box-icon>
  )
}
