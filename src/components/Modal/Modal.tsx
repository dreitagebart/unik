import React, { useEffect, useRef, useState } from 'react'

import { HeightProp, WidthProp } from '../../types'
import { useOnClickOutside, useWindowResize } from '../../hooks'
import { _Backdrop, _Modal } from './Styled'
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
  onOpen = () => null,
  onClose = () => null,
  closeOnBackdrop = false,
  width = '40%',
  height = 'auto'
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [modalHeight, setModalHeight] = useState(0)
  const { height: windowHeight } = useWindowResize()

  useEffect(() => {
    const rect = modalRef.current?.getBoundingClientRect()

    if (rect) {
      setModalHeight(rect?.height)
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'

      if (modalHeight > windowHeight) {
        const newHeight = windowHeight - 80

        if (modalRef.current) {
          modalRef.current.style.height = `${newHeight}px`
          modalRef.current.style.overflowY = 'scroll'
        }
      }

      onOpen()
    }
  }, [open, modalHeight, windowHeight])

  useOnClickOutside(
    modalRef,
    () => {
      if (closeOnBackdrop) {
        onClose()
      }
    },
    open
  )

  return (
    <Portal>
      <Provider value={{ closeIcon, withoutClose, onClose }}>
        <_Backdrop visible={open}></_Backdrop>
        <_Modal
          plain={plain}
          ref={modalRef}
          visible={open}
          width={width}
          height={height}
        >
          {children}
        </_Modal>
      </Provider>
    </Portal>
  )
}

Modal.Title = Title
Modal.Content = Content
Modal.Actions = Actions
