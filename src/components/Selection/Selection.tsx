import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { Item } from './Item'
import { KeyValue, WidthProp } from '../../types'
import {
  renderBorder,
  renderRadius,
  renderShadow,
  renderBackground,
  renderMargin,
  renderPadding,
  renderWidth
} from '../../utils'
import { Provider } from './Context'
import { Icon } from '../Icon'

export type ItemType<T> = KeyValue & T

export type ItemTypeArray<T> = Array<ItemType<T>>

export interface SelectionProps<T> {
  hideSelected?: boolean
  placeholder?: string
  multi?: boolean
  width?: WidthProp
  items: ItemTypeArray<T>
  search?: boolean
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
  onSelect?: (key: string) => void
  renderItem?: (item: ItemType<T>) => React.ReactNode
}

interface _ListProps {
  open: boolean
}

interface _WrapperProps {
  width: WidthProp
}

const renderVisibility = (open: boolean) => {
  if (open)
    return css`
      opacity: 1;
      visibility: visible;
    `

  return css`
    opacity: 0;
    visibility: hidden;
  `
}

const _Wrapper = styled.div<_WrapperProps>`
  ${({ width }) => renderWidth(width)}
`

const _Title = styled.div``

const _Selection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => {
    return css`
      ${renderBorder(theme.selection.selection.border)}
      ${renderShadow(theme.selection.selection.shadow)}
      ${renderBackground(theme.selection.selection.background)}
      ${renderMargin(theme.selection.selection.margin)}
      ${renderPadding(theme.selection.selection.padding)}
      ${renderRadius(theme.selection.selection.radius)}
    `
  }}
`

const _Inner = styled.div`
  width: 100%;
`

const _Down = styled.div`
  cursor: pointer;
`

const _ResultList = styled.div`
  width: 100%;
  position: relative;
`

const _List = styled.div<_ListProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  transition: all 0.3s ease-in-out;
  ${({ open }) => renderVisibility(open)}

  ${({ theme }) => {
    return css`
      ${renderBorder(theme.selection.resultList.border)}
      ${renderShadow(theme.selection.resultList.shadow)}
      ${renderBackground(theme.selection.resultList.background)}
      ${renderMargin(theme.selection.resultList.margin)}
      ${renderPadding(theme.selection.resultList.padding)}
      ${renderRadius(theme.selection.resultList.radius)}
    `
  }}
`

const _Input = styled.input.attrs(() => ({ type: 'text' }))`
  font: inherit;
  border: 0;
  outline: 0;
`

export const Selection = <T extends object>({
  renderItem,
  hideSelected = false,
  multi = false,
  placeholder = 'Select your item',
  width = '100%',
  onOpen,
  onClose,
  onSelect,
  isOpen,
  search = false,
  items
}: SelectionProps<T>) => {
  let content: any
  const [selected, setSelected] = useState<Array<string>>([])
  const [term, setTerm] = useState('')
  const [open, setOpen] = useState(false)

  content = items
    ?.filter((i) => {
      let match = false

      if (selected.length > 0 && hideSelected) {
        match = selected.findIndex((s) => s === i.key) >= 0

        if (match) return false
      }

      if (!term) return true

      match = i.value.toLowerCase().includes(term.toLowerCase())

      return match
    })
    .map((i) => {
      return (
        <Item active={false} itemKey={i.key} key={i.key}>
          {renderItem ? renderItem(i) : i.value}
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

  const handleSelect = (key: string) => {
    if (onSelect) {
      onSelect(key)
    }
  }

  let ph = placeholder

  const found = items?.find((i) => i.key === selected[0])

  if (found && !multi) {
    ph = found.value
  }

  return (
    <Provider
      value={{
        hideSelected,
        multi,
        selected,
        setSelected,
        onSelect: handleSelect
      }}
    >
      <_Wrapper width={width}>
        <_Selection>
          <_Inner>
            {!search && <_Title onClick={handleToggleOpen}>{ph}</_Title>}
            {search && (
              <_Input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={term}
                placeholder={ph}
              ></_Input>
            )}
          </_Inner>
          <_Down onClick={handleToggleOpen}>
            {open ? (
              <Icon name="chevron-up" type="solid"></Icon>
            ) : (
              <Icon name="chevron-down" type="solid"></Icon>
            )}
          </_Down>
        </_Selection>
        <_ResultList>
          <_List open={isOpen || open}>{content}</_List>
        </_ResultList>
      </_Wrapper>
    </Provider>
  )
}
