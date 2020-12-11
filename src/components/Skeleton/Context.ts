import { createContext } from 'react'

interface SkeletonContext {
  loading: boolean
}

export const Context = createContext<SkeletonContext>({ loading: false })

export const { Provider } = Context
