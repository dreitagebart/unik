import React, { PropsWithChildren, useContext } from 'react'

import { Icon } from '../Icon'
import { Context } from './Context'
import { _Item } from './Styled'

export interface ItemProps<SelectionItem> {
  active: boolean
  item: SelectionItem
}

export const Item = <SelectionItem,>({
  children,
  item
}: PropsWithChildren<ItemProps<SelectionItem>>) => {
  let checked = false
  const {
    select,
    setSelected,
    selected,
    onSelect,
    keyProp,
    multi,
    hideSelected
  } = useContext(Context)

  const handleClick = () => {
    onSelect(item)

    if (!multi) return setSelected([(item as any)[keyProp]])

    const index = selected.findIndex((s) => s === (item as any)[keyProp])

    if (index < 0) {
      setSelected([(item as any)[keyProp], ...selected])
    } else {
      let sel = [...selected]
      sel.splice(index, 1)
      setSelected(sel)
    }
  }

  if (!hideSelected) {
    checked = selected.findIndex((s) => s === (item as any)[keyProp]) >= 0
  }

  return (
    <_Item onClick={handleClick}>
      <div>{children}</div>
      {select && (
        <Icon
          style={{ display: checked ? 'block' : 'none' }}
          name="check"
        ></Icon>
      )}
    </_Item>
  )
}
