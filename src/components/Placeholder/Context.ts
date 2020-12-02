import { createContext } from 'react'

interface PlaceholderContext {
  loading: boolean
}

export const Context = createContext<PlaceholderContext>({ loading: false })

export const { Provider } = Context
