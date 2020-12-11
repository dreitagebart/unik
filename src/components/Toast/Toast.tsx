import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'

import { _Toast } from './Styled'
import { Toast } from './Class'
import { ToastContext } from './Context'
import { Position } from './Provider'

export interface ToastProps {
  toast: Toast
}

export const ToastComponent: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast, position } = useContext(ToastContext)

  return (
    <CSSTransition
      classNames="fade"
      timeout={{ appear: 1000, enter: toast.timeout, exit: 500 }}
      onEnter={() => console.log('enter')}
      onExit={() => console.log('exit')}
      in={toast.active}
      onEntering={() => console.log('entering')}
      onEntered={() => removeToast(toast.id)}
      onExiting={() => console.log('exiting')}
      onExited={() => {
        console.log('exited')
      }}
      mountOnEnter
      unmountOnExit
    >
      <_Toast width={toast.width} type={toast.type} position={position}>
        {toast.message}
      </_Toast>
    </CSSTransition>
  )
}
