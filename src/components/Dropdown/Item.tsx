import React, { useCallback } from 'react'

import { Space } from '../Space'
import { _Item } from './Styled'

export interface ItemProps {
  active?: boolean
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const Item: React.FC<ItemProps> = ({
  children,
  onClick,
  icon,
  active = false
}) => {
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event)
    }
  }, [])

  return (
    <_Item onClick={handleClick} active={active}>
      {icon}
      {icon && <Space size={8}></Space>}
      {children}
    </_Item>
  )
}
