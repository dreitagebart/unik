import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

import { Table, TableProps } from './Table'
import { Icon } from '../Icon'
import { compareValues } from '../../utils'

interface Column<T> {
  prop: string
  header: string | React.ReactNode
  render?: (column: T) => string | React.ReactNode
  search?: boolean
  sort?: boolean
}

interface Filter {
  prop: string
  value: string
}

interface Sort {
  prop: string
  direction: 'asc' | 'desc'
}

export interface DataTableProps<T> extends TableProps {
  items: Array<T>
  columns: Array<Column<T>>
  sort?: Sort
  onSearch?: (term: string) => void
  onSort?: (sort: Sort) => void
}

interface _SortProps {}

interface _HeaderProps {
  clickable: boolean
}

const _Search = styled.div`
  cursor: pointer;
  padding-left: 8px;
`

const _Header = styled.div<_HeaderProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}
`

const _Input = styled.input.attrs(() => ({ type: 'text' }))`
  outline: 0;
  border: 1px solid #efefef;
  line-height: 1.8em;
`

const _Sort = styled.div<_SortProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const DataTable = <T extends object>({
  onSearch,
  onSort,
  sort = {
    prop: '',
    direction: 'asc'
  },
  columns,
  items,
  ...rest
}: DataTableProps<T>) => {
  let data = items
  const [filters, setFilters] = useState<Array<Filter>>([])
  const [term, setTerm] = useState('')
  const [search, setSearch] = useState('')
  const [sorting, setSorting] = useState<Sort>(sort)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (sort) setSorting(sort)
  }, [sort])

  filters.map((filter) => {
    data = data.filter((d: any) => {
      const match = d[filter.prop]
        .toLowerCase()
        .includes(filter.value.toLowerCase())

      return match
    })
  })

  if (sorting.prop) {
    data.sort(compareValues(sorting.prop, sorting.direction))
  }

  return (
    <Table {...rest}>
      <Table.Head>
        <Table.Row>
          {columns.map((col) => {
            let asc = false

            if (col.sort) {
              if (sorting.prop === col.prop) {
                if (sorting.direction === 'asc') {
                  asc = true
                }
              }
            }

            const clickable = col.sort || false

            const searchable = filters.find((f) => f.prop === col.prop)

            return (
              <Table.HeaderCell key={col.prop}>
                <_Sort>
                  <_Header
                    clickable={clickable}
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                      if (!clickable) return event.preventDefault()

                      if (col.sort) {
                        const newSort: Sort = {
                          prop: col.prop,
                          direction: asc ? 'desc' : 'asc'
                        }

                        if (onSort) onSort(newSort)

                        setSorting(newSort)
                      }
                    }}
                  >
                    {col.header}
                    {col.sort && sorting.prop === col.prop && (
                      <Icon name={asc ? 'chevron-up' : 'chevron-down'}></Icon>
                    )}
                  </_Header>
                  {col.search && col.prop !== search && (
                    <_Search
                      onClick={() => {
                        const index = filters.findIndex(
                          (f) => f.prop === col.prop
                        )

                        if (index >= 0) {
                          setTerm(filters[index].value)
                        }

                        setSearch(col.prop)

                        setTimeout(() => {
                          inputRef?.current?.focus()
                        }, 10)
                      }}
                    >
                      <Icon name="search" size="xs"></Icon>
                    </_Search>
                  )}
                </_Sort>
                {col.search && searchable?.value && col.prop !== search && (
                  <div>filter: {searchable?.value}</div>
                )}
                {col.search && col.prop === search && (
                  <_Input
                    ref={inputRef}
                    value={term}
                    onKeyDown={(event) => {
                      if (event.keyCode === 13) {
                        setSearch('')
                        setTerm('')
                      }
                    }}
                    onBlur={() => {
                      setSearch('')
                      setTerm('')
                    }}
                    onFocus={() => {
                      let newFilters = [...filters]
                      const index = newFilters.findIndex(
                        (f) => f.prop === col.prop
                      )

                      if (index < 0) {
                        newFilters.push({ prop: col.prop, value: term })
                      } else {
                        newFilters.splice(index, 1, {
                          prop: col.prop,
                          value: term
                        })
                      }
                      setFilters(newFilters)

                      setSearch(col.prop)
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      if (onSearch) onSearch(event.target.value)

                      setFilters(
                        filters.map((f) =>
                          f.prop === search
                            ? { ...f, value: event.target.value }
                            : { ...f }
                        )
                      )
                      setTerm(event.target.value)
                    }}
                  ></_Input>
                )}
              </Table.HeaderCell>
            )
          })}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map((item: any, index) => {
          return (
            <Table.Row key={index}>
              {columns.map((col, i) => (
                <Table.Cell key={`col-${index}-${i}`}>
                  {col.render ? col.render(item) : item[col.prop]}
                </Table.Cell>
              ))}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
