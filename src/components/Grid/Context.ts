import { createContext } from 'react'

interface GridContext {
  columns: number
}

export const Context = createContext<GridContext>({
  columns: 12
})

export const { Provider } = Context
