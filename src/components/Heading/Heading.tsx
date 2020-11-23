import React from 'react'

import { RootComponent } from '../../types'
import { _Heading, _Icon } from './Styled'

export interface HeadingProps extends RootComponent {
  icon?: React.ReactNode
  children: any
  level?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
}

export const Heading: React.FC<HeadingProps> = ({
  id,
  style,
  className,
  icon,
  children,
  level = 'one'
}) => {
  return (
    <_Heading level={level} id={id} style={style} className={className}>
      <_Icon visible={!!icon}>{icon}</_Icon>
      <div>{children}</div>
    </_Heading>
  )
}
