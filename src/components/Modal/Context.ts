import { createContext } from 'react'

interface ModalContext {
  onClose?: () => void
  withoutClose: boolean
  closeIcon: React.ReactNode
}

export const Context = createContext<ModalContext>({
  withoutClose: false,
  closeIcon: null
})

export const { Provider } = Context
