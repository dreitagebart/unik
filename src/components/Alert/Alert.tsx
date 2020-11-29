import React, { Fragment } from 'react'

import { RootComponent } from '../../types'
import { Space } from '../Space'
import { ErrorType, _Alert } from './Styled'

export interface AlertProps extends RootComponent {
  type?: ErrorType
  icon?: React.ReactNode
  iconGutter?: number
}

export const Alert: React.FC<AlertProps> = ({
  children,
  id,
  style,
  className,
  type = 'info',
  icon,
  iconGutter = 12
}) => {
  return (
    <_Alert type={type} style={style} id={id} className={className}>
      {icon && (
        <Fragment>
          {icon}
          <Space size={iconGutter}></Space>
        </Fragment>
      )}
      {children}
    </_Alert>
  )
}
