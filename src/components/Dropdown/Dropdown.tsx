import React, { useState } from 'react'

import { _Wrapper, _List, _Dropdown, _ResultList } from './Styled'
import { Divider, DividerProps } from './Divider'
import { Item, ItemProps } from './Item'
import { Title, TitleProps } from './Title'
import { Icon } from '../Icon'
import { WidthProp } from '../../types'

interface SubComponents {
  Title: React.FC<TitleProps>
  Item: React.FC<ItemProps>
  Divider: React.FC<DividerProps>
}

export interface DropdownProps {
  dropdownWidth?: WidthProp
  listWidth?: WidthProp
  plain?: boolean
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
  title: string | React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> & SubComponents = ({
  plain = false,
  isOpen = false,
  children,
  title,
  onClose,
  onOpen,
  listWidth = '100%',
  dropdownWidth = 'auto'
}) => {
  const [open, setOpen] = useState(isOpen)

  const handleClick = () => {
    if (open) {
      if (onClose) onClose()
    } else {
      if (onOpen) onOpen()
    }

    setOpen(!open)
  }

  return (
    <_Wrapper width={dropdownWidth}>
      <_Dropdown onClick={handleClick} plain={plain}>
        {title}
        <Icon name={open ? 'chevron-up' : 'chevron-down'}></Icon>
      </_Dropdown>
      <_ResultList>
        <_List width={listWidth} open={open}>
          {children}
        </_List>
      </_ResultList>
    </_Wrapper>
  )
}

Dropdown.Title = Title
Dropdown.Divider = Divider
Dropdown.Item = Item
