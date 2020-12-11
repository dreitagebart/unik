import React, { useCallback, useState } from 'react'
import { ToastContainer } from './Container'

import { Provider } from './Context'
import { Toast } from './Class'
import { AddToastMessage } from './types'
import { PaddingProp } from '../../types'
import { MarginProp } from '@dreitagebart/box/dist/types'

export type Position = 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'

interface Props {
  position?: Position
}

export const ToastProvider: React.FC<Props> = ({
  children,
  position = 'topRight'
}) => {
  const [toasts, setToasts] = useState<Array<Toast>>([])
  const addToast = useCallback(
    (toast: AddToastMessage) => {
      const newToast = Toast.addToast(toast)

      setToasts((toasts) => [...toasts, newToast])
    },
    [setToasts]
  )

  const removeToast = useCallback(
    (id) => {
      setToasts(
        toasts.map((t) => {
          if (t.id === id) {
            t.remove()
          }

          return t
        })
      )
    },
    [setToasts, toasts]
  )

  return (
    <Provider value={{ addToast, removeToast, position }}>
      <ToastContainer toasts={toasts} position={position}></ToastContainer>
      {children}
    </Provider>
  )
}
