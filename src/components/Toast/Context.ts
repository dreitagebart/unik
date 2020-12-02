import { createContext } from 'react'

import { AddToastMessage, CreateToastMessage } from './types'
import { Toast } from './Class'

interface Context {
  createToast: (toast: CreateToastMessage) => Toast
  addToast: (toast: AddToastMessage) => void
  removeToast: (id: string) => void
}

export const ToastContext = createContext<Context>({
  createToast: () => Toast.createToast({ message: 'Hallo Welt' }),
  addToast: () => null,
  removeToast: () => null
})

export const { Provider } = ToastContext
