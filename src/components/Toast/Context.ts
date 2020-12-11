import { createContext } from 'react'
import { Position } from './Provider'

import { AddToastMessage } from './types'

interface Context {
  position: Position
  addToast: (toast: AddToastMessage) => void
  removeToast: (id: string) => void
}

export const ToastContext = createContext<Context>({
  position: 'bottomLeft',
  addToast: () => null,
  removeToast: () => null
})

export const { Provider } = ToastContext
