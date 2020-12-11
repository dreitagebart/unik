import React from 'react'
import { RootComponent } from '../../types'
import { _Button } from './Styled'

export interface ButtonProps extends RootComponent {
  type?: 'submit' | 'reset' | 'button'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: React.ReactNode
  primary?: boolean
  children?: string | React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  id,
  style,
  className,
  icon,
  onClick,
  onMouseDown,
  type = 'button',
  children,
  primary = false
}) => {
  return (
    <_Button
      type={type}
      primary={primary}
      onClick={onClick}
      onMouseDown={onMouseDown}
      id={id}
      style={style}
      className={className}
    >
      {icon}
      <div style={{ paddingLeft: icon && children ? 8 : 0 }}>{children}</div>
    </_Button>
  )
}
