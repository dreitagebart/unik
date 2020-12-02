import React from 'react'

import { Portal } from '../Portal'
import { _Container } from './Styled'
import { ToastComponent } from './Toast'
import { Toast } from './Class'

interface Props {
  toasts: Array<Toast>
}

export const ToastContainer: React.FC<Props> = ({ toasts }) => {
  return (
    <Portal>
      <_Container>
        {toasts.map((toast) => {
          return <ToastComponent key={toast.id} toast={toast}></ToastComponent>
        })}
      </_Container>
    </Portal>
  )
}
