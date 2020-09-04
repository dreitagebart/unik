import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import {
  renderBorder,
  renderShadow,
  renderBackground,
  renderMargin,
  renderPadding,
  renderRadius
} from '../../utils'
import { Context } from './Context'

export interface ItemProps {
  active: boolean
  itemKey: string
}

interface _CheckedProps {
  checked: boolean
}

const _Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  ${({ theme }) => {
    return css`
      ${renderBorder(theme.selection.item.border)}
      ${renderShadow(theme.selection.item.shadow)}
      ${renderBackground(theme.selection.item.background)}
      ${renderMargin(theme.selection.item.margin)}
      ${renderPadding(theme.selection.item.padding)}
      ${renderRadius(theme.selection.item.radius)}
    `
  }}
`

const _Checked = styled.div<_CheckedProps>`
  display: ${({ checked }) => (checked ? 'block' : 'none')};
`

export const Item: React.FC<ItemProps> = ({ children, itemKey }) => {
  let checked = false
  const { setSelected, selected, onSelect, multi, hideSelected } = useContext(
    Context
  )

  const handleClick = () => {
    onSelect(itemKey)

    if (!multi) return setSelected([itemKey])

    const index = selected.findIndex((s) => s === itemKey)

    if (index < 0) {
      setSelected([itemKey, ...selected])
    } else {
      let sel = [...selected]
      sel.splice(index, 1)
      setSelected(sel)
    }
  }

  if (!hideSelected) {
    checked = selected.findIndex((s) => s === itemKey) >= 0
  }

  return (
    <_Item onClick={handleClick}>
      <div>{children}</div>
      <_Checked checked={checked}>X</_Checked>
    </_Item>
  )
}
