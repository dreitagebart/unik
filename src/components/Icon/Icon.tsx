import React from 'react'
import 'boxicons'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'box-icon': any
    }
  }
}

export interface IconProps {
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
  name,
  type = 'regular',
  animation,
  border,
  flip,
  pull,
  rotate,
  size,
  color
}) => {
  let iconSize = size

  if (typeof size === 'number') {
    iconSize = `${size}px`
  }

  return (
    <box-icon
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
