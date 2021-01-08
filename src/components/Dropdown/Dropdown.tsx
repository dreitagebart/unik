import React, {
  Fragment,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import { Divider } from './Divider'
import { Item } from './Item'
import { Title } from './Title'
import { _Wrapper, _Result, _Button, _Icon, _Search, _Inner } from './Styled'
import { useOnClickOutside, useWindowResize } from '../../hooks'
import { Portal } from '../Portal'
import { Icon } from '../Icon'
import { Badge } from '../Badge'

export interface DefaultDropdownItem {
  key: string
  value: string
  type?: 'item' | 'divider' | 'title'
}

interface Properties<DropdownItem = DefaultDropdownItem> {
  key: string
  value: string
  onSelect?: (
    item: DropdownItem,
    event: React.MouseEvent<HTMLDivElement>
  ) => void
  render: (item: DropdownItem) => React.ReactNode
}

export interface DropdownProps<DropdownItem = DefaultDropdownItem> {
  inline?: boolean
  items?: Array<DropdownItem>
  properties?: Properties<DropdownItem>
  selection?: boolean
  multi?: boolean
  search?: boolean
  searchPlaceholder?: string
  open?: boolean
  onOpen?: () => void
  onClose?: () => void
  direction?: 'left' | 'right'
  placeholder?: string | React.ReactNode
  iconOpen?: React.ReactNode
  iconClose?: React.ReactNode
  noIcon?: boolean
  noResult?: string | React.ReactNode
}

// interface SubComponents {
//   Title: React.FC<TitleProps>
//   Item: React.FC<ItemProps>
//   Divider: React.FC<DividerProps>
// }

export const Dropdown = <DropdownItem,>({
  searchPlaceholder,
  iconOpen = <Icon name="chevron-up"></Icon>,
  iconClose = <Icon name="chevron-down"></Icon>,
  noIcon = false,
  noResult = 'no results',
  inline = false,
  items,
  properties = {
    key: 'key',
    value: 'value',
    render: () => null
  },
  onOpen = () => null,
  onClose = () => null,
  direction = 'left',
  placeholder,
  open = false,
  selection,
  multi = false,
  search = false,
  children
}: PropsWithChildren<DropdownProps<DropdownItem>>) => {
  const searchRef = useRef<HTMLInputElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<Array<string>>([])
  const [index, setIndex] = useState(0)
  const [focus, setFocus] = useState(false)
  // const [open, setOpen] = useState(false)
  const [term, setTerm] = useState('')
  const [filtered, setFiltered] = useState(items || [])
  const [bounds, setBounds] = useState({ top: 0, left: 0 })
  const { width, height } = useWindowResize()

  useOnClickOutside(
    resultRef,
    () => {
      handleClick()
    },
    open
  )

  const handleTerm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTerm(event.target.value)
      onOpen()
      // setOpen(true)
      setIndex(0)
    },
    []
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault()
          const previousIndex = index >= filtered.length - 1 ? 0 : index + 1
          setIndex(previousIndex)
          break
        }
        case 'ArrowUp': {
          event.preventDefault()
          const nextIndex = index <= 0 ? filtered.length - 1 : index - 1
          setIndex(nextIndex)
          break
        }
        case 'Enter': {
          event.preventDefault()
          if (properties.onSelect) {
            properties.onSelect(filtered[index], event as any)
          }
          setTerm('')

          if (selection) {
            if (multi) {
              setSelected([
                (filtered as any)[index][properties.key],
                ...selected
              ])
              searchRef.current?.focus()
            } else {
              setSelected([(filtered as any)[index][properties.key]])
              // setOpen(false)
              onClose()
            }
          } else {
            // setOpen(false)
            onClose()
          }
          break
        }
      }
    },
    [filtered, index, selected]
  )

  const handleFocus = useCallback(() => {
    console.log('focus')
    // setOpen(true)
    setFocus(true)
    onOpen()
  }, [])

  const handleBlur = useCallback(() => {
    console.log('blur')
    // setOpen(false)
    setFocus(false)
    onClose()
  }, [])

  const handleItemSelect = useCallback(
    (item: DropdownItem, event: React.MouseEvent<HTMLDivElement>) => {
      if (properties.onSelect) {
        properties.onSelect(item, event)
      }

      if (selection) {
        if (multi) {
          setSelected((s) => [(item as any)[properties.key], ...s])
          searchRef.current?.focus()
        } else {
          setSelected([(item as any)[properties.key]])
          // setOpen(false)
          onClose()
        }
      } else {
        // setOpen(false)
        onClose()
      }
    },
    [selected, selection, multi]
  )

  const handleItemRemove = useCallback(
    (id: string) => {
      const index = selected.findIndex((select) => select === id)

      if (index >= 0) {
        const sel = [...selected]
        sel.splice(index, 1)

        setSelected(sel)
      }
    },
    [selected]
  )

  const handleClick = useCallback(() => {
    if (focus) return

    if (search) {
      searchRef.current?.focus()
    }

    if (open) {
      onClose()
    } else {
      const rect = innerRef.current?.getBoundingClientRect()

      if (rect) {
        setBounds({
          top: rect.top + rect.height + window.pageYOffset,
          left:
            direction === 'left'
              ? rect.left + window.pageXOffset
              : rect.right + window.pageXOffset
        })
      }

      onOpen()
    }

    // setOpen(!open)
  }, [open, focus])

  useEffect(() => {
    const rect = innerRef.current?.getBoundingClientRect()

    if (rect) {
      setBounds({
        top: rect.top + rect.height + window.pageYOffset,
        left: rect.left + window.pageXOffset
      })
    }
  }, [width, height])

  useEffect(() => {
    if (open && search) {
      const s = term.toLowerCase()

      setFiltered(
        items?.filter((item: any) => {
          if (
            selected.findIndex((select) => select === item[properties.key]) >= 0
          ) {
            return false
          }

          const match = item[properties.value].toLowerCase().includes(s)

          return match
        }) || []
      )
    }
  }, [open, search, term, items, selected])

  return (
    <_Wrapper inline={inline}>
      <_Inner ref={innerRef}>
        {!search && <_Button onMouseDown={handleClick}>{placeholder}</_Button>}
        {search && (
          <Fragment>
            {selected.map((select) => {
              const sel: any = items?.find(
                (i: any) => i[properties.key] === select
              )

              if (!sel) {
                return <div key={select}>...</div>
              }

              if (!multi) {
                return (
                  <_Button key={select} onMouseDown={handleClick}>
                    {sel[properties.value]}
                  </_Button>
                )
              }

              return (
                <Badge
                  style={{ marginLeft: 0, marginRight: 8 }}
                  key={select}
                  close
                  onClose={() => handleItemRemove(select)}
                >
                  {sel[properties.value]}
                </Badge>
              )
            })}
            {(multi || selected.length === 0) && (
              <_Search
                placeholder={searchPlaceholder}
                ref={searchRef}
                type="text"
                value={term}
                onChange={handleTerm}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></_Search>
            )}
          </Fragment>
        )}
        <_Icon visible={!noIcon}>{open ? iconOpen : iconClose}</_Icon>
      </_Inner>
      <Portal>
        <_Result ref={resultRef} open={open} bounds={bounds}>
          {children ||
            filtered?.map((item: any, itemIndex: number) => {
              return (
                <Item
                  active={index === itemIndex}
                  key={item[properties.key]}
                  onClick={(event) => handleItemSelect(item, event)}
                >
                  {properties.render ? (
                    properties?.render(item)
                  ) : (
                    <div>...</div>
                  )}
                </Item>
              )
            })}
          {search && term && filtered?.length === 0 && <Item>{noResult}</Item>}
        </_Result>
      </Portal>
    </_Wrapper>
  )
}

Dropdown.Title = Title
Dropdown.Divider = Divider
Dropdown.Item = Item
