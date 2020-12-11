import React from 'react'
import { TransitionGroup } from 'react-transition-group'

import { Portal } from '../Portal'
import { _Container, _Toast } from './Styled'
import { ToastComponent } from './Toast'
import { Toast } from './Class'
import { Position } from './Provider'

interface Props {
  toasts: Array<Toast>
  position: Position
}

export const ToastContainer: React.FC<Props> = ({ toasts, position }) => {
  return (
    <Portal>
      <_Container position={position}>
        <TransitionGroup component={null} appear>
          {toasts.map((toast) => {
            return (
              <ToastComponent key={toast.id} toast={toast}></ToastComponent>
            )
          })}
        </TransitionGroup>
      </_Container>
    </Portal>
  )
}
