import { PaddingProp, BorderProp } from '../../types'
import { createContext } from 'react'

interface TableContext {
  hover: 'cell' | 'row' | 'none'
  cellPadding: PaddingProp
  cellBorder: BorderProp
}

export const Context = createContext<TableContext>({
  hover: 'none',
  cellPadding: undefined,
  cellBorder: undefined
})

export const { Provider } = Context
