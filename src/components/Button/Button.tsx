import React from 'react'
import { RootComponent } from '../../types'
import { _Button } from './Styled'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement & RootComponent> {
  icon?: React.ReactNode
  primary?: boolean
  children?: string | React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  onClick,
  type = 'button',
  children,
  primary = false,
  ...rest
}) => {
  return (
    <_Button type={type} primary={primary} onClick={onClick} {...rest}>
      {icon}
      <div style={{ paddingLeft: icon && children ? 8 : 0 }}>{children}</div>
    </_Button>
  )
}
