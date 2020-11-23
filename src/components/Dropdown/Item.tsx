import React from 'react'

import { Space } from '../Space'
import { _Item } from './Styled'

export interface ItemProps {
  icon?: React.ReactNode
  onClick?: () => void
}

export const Item: React.FC<ItemProps> = ({ children, onClick, icon }) => {
  return (
    <_Item onClick={onClick}>
      {icon}
      {icon && <Space size={8}></Space>}
      {children}
    </_Item>
  )
}
