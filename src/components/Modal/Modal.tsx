import React, { useEffect, useRef } from 'react'

import { HeightProp, WidthProp } from '../../types'
import { useOnClickOutside } from '../../hooks'
import {
  _Backdrop,
  _Modal,
  _Close,
  _Content,
  _Actions,
  _Dialog,
  _Wrapper
} from './Styled'
import { Portal } from '../Portal'
import { Title, TitleProps } from './Title'
import { Content, ContentProps } from './Content'
import { Actions, ActionsProps } from './Actions'
import { Provider } from './Context'

interface SubComponents {
  Title: React.FC<TitleProps>
  Content: React.FC<ContentProps>
  Actions: React.FC<ActionsProps>
}

export interface ModalProps {
  plain?: boolean
  withoutClose?: boolean
  closeIcon?: React.ReactNode
  closeOnBackdrop?: boolean
  width?: WidthProp
  height?: HeightProp
  onClose?: () => void
  onOpen?: () => void
  open: boolean
  children: any
}

export const Modal: React.FC<ModalProps> & SubComponents = ({
  closeIcon,
  plain = false,
  withoutClose = false,
  children,
  open,
  onOpen,
  onClose,
  closeOnBackdrop = false,
  width = '40%',
  height = 'auto'
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && onOpen) onOpen()
  }, [open])

  useOnClickOutside(
    modalRef,
    () => {
      if (closeOnBackdrop && onClose) onClose()
    },
    open
  )

  return (
    <Portal>
      <Provider value={{ closeIcon, withoutClose, onClose }}>
        <_Backdrop visible={open}>
          <_Modal
            plain={plain}
            ref={modalRef}
            visible={open}
            width={width}
            height={height}
          >
            <_Dialog>
              <_Wrapper>{children}</_Wrapper>
            </_Dialog>
          </_Modal>
        </_Backdrop>
      </Provider>
    </Portal>
  )
}

Modal.Title = Title
Modal.Content = Content
Modal.Actions = Actions
