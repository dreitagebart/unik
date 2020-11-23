import React, { PropsWithChildren, useRef, useState } from 'react'

import { RootComponent, WidthProp } from '../../types'
import { Item } from './Item'
import { Provider } from './Context'
import { Icon } from '../Icon'
import {
  _Wrapper,
  _Inner,
  _Input,
  _Selection,
  _ResultList,
  _List,
  _Title
} from './Styled'
import { useOnClickOutside } from '../../hooks'
import { useTheme } from 'styled-components'

export interface DefaultSelectionItem {
  key: string
  label: string
}

export interface SelectionProps<SelectionItem = DefaultSelectionItem>
  extends RootComponent {
  closeOnSelect?: boolean
  select?: boolean
  plain?: boolean
  hideSelected?: boolean
  placeholder?: string
  multi?: boolean
  selectionWidth?: WidthProp
  listWidth?: WidthProp
  keyProp?: string
  labelProp?: string
  items: Array<SelectionItem>
  search?: boolean
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
  onSelect?: (item: SelectionItem) => void
  renderItem?: (item: SelectionItem) => React.ReactNode
}

export const Selection = <SelectionItem,>({
  children,
  closeOnSelect = false,
  select = false,
  id,
  style,
  className,
  keyProp = 'key',
  labelProp = 'label',
  renderItem,
  hideSelected = false,
  multi = false,
  placeholder = 'Select your item',
  listWidth = '100%',
  selectionWidth = '100%',
  onOpen,
  onClose,
  onSelect,
  isOpen,
  search = false,
  items,
  plain = false
}: PropsWithChildren<SelectionProps<SelectionItem>>) => {
  let content: any
  const wrapperRef = useRef<HTMLDivElement>(null)
  const {
    selection: {
      selection: { color }
    }
  } = useTheme()
  const [selected, setSelected] = useState<Array<string>>([])
  const [term, setTerm] = useState('')
  const [open, setOpen] = useState(false)

  useOnClickOutside(
    wrapperRef,
    () => {
      if (onClose) onClose()
      setOpen(false)
    },
    open
  )

  content = items
    ?.filter((i: any) => {
      let match = false

      if (selected.length > 0 && hideSelected) {
        match = selected.findIndex((s) => s === i.key) >= 0

        if (match) return false
      }

      if (!term) return true

      match = i[labelProp].toLowerCase().includes(term.toLowerCase())

      return match
    })
    .map((i: any) => {
      return (
        <Item<SelectionItem> active={false} item={i} key={i[keyProp]}>
          {renderItem ? renderItem(i) : i[labelProp]}
        </Item>
      )
    })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value)

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setOpen(true)

    if (onOpen) {
      onOpen()
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setOpen(false)

    if (onClose) {
      onClose()
    }
  }

  const handleToggleOpen = () => {
    if (open) {
      if (onClose) onClose()
    } else {
      if (onOpen) onOpen()
    }

    setOpen(!open)
  }

  const handleSelect = (item: SelectionItem) => {
    if (onSelect) {
      onSelect(item)
    }
    if (closeOnSelect) {
      if (onClose) onClose()
      setOpen(false)
    }
  }

  let ph = placeholder

  if (select) {
    const found: any = items?.find((i: any) => i[keyProp] === selected[0])

    if (found && !multi) {
      ph = found[labelProp]
    }
  }

  return (
    <Provider
      value={{
        select,
        keyProp,
        hideSelected,
        multi,
        selected,
        setSelected,
        onSelect: handleSelect
      }}
    >
      <_Wrapper
        width={selectionWidth}
        ref={wrapperRef}
        id={id}
        style={style}
        className={className}
      >
        <_Selection plain={plain}>
          {!search && (
            <_Title onClick={handleToggleOpen}>{select ? ph : children}</_Title>
          )}
          {search && (
            <_Input
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              value={term}
              placeholder={ph}
            ></_Input>
          )}
          <Icon
            color={color}
            onClick={handleToggleOpen}
            name={open ? 'chevron-up' : 'chevron-down'}
            type="solid"
          ></Icon>
        </_Selection>
        <_ResultList>
          <_List width={listWidth} open={isOpen || open}>
            {content}
          </_List>
        </_ResultList>
      </_Wrapper>
    </Provider>
  )
}
