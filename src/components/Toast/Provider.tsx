import React, { useCallback, useState } from 'react'
import { ToastContainer } from './Container'

import { Provider } from './Context'
import { Toast } from './Class'
import { AddToastMessage, CreateToastMessage } from './types'

interface Props {}

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const [toasts, setToasts] = useState<Array<Toast>>([])
  const addToast = useCallback(
    (toast: AddToastMessage) => {
      const newToast = Toast.addToast(toast)
      debugger
      setToasts((toasts) => [...toasts, newToast])
    },
    [setToasts]
  )

  const removeToast = useCallback(
    (id) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id))
    },
    [setToasts]
  )

  const createToast = useCallback(
    (toast: CreateToastMessage) => {
      const newToast = Toast.createToast(toast)

      setToasts((toasts) => [...toasts, newToast])

      return newToast
    },
    [setToasts]
  )

  return (
    <Provider value={{ addToast, removeToast, createToast }}>
      <ToastContainer toasts={toasts}></ToastContainer>
      {children}
    </Provider>
  )
}
