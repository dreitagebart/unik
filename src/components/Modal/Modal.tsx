import React, { useEffect, Fragment, useRef } from 'react'
import styled, { css } from 'styled-components'

import {
  renderWidth,
  renderBorder,
  renderBackground,
  renderMargin,
  renderRadius,
  renderShadow,
  renderPadding,
  renderColor,
  renderTransition
} from '../../utils'
import { Icon } from '../Icon'
import { WidthProp } from '../../types'
import { useOnClickOutside } from '../../hooks'

export interface ModalProps {
  closeOnBackdrop?: boolean
  title?: string | React.ReactNode
  width?: WidthProp
  onClose?: () => void
  onOpen?: () => void
  open: boolean
  children: any
}

interface _BackdropProps {
  visible: boolean
}

interface _ModalProps {
  visible: boolean
  width: WidthProp
}

const _Backdrop = styled.div<_BackdropProps>`
  ${({ theme }) =>
    css`
      ${renderTransition(theme.modal.backdrop.transition)}
      ${renderBackground(theme.modal.backdrop.background)}
    `}

  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`

const _Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

const _Title = styled.div``

const _Content = styled.div``

const _Close = styled.div`
  cursor: pointer;
`

const _Modal = styled.div<_ModalProps>`
  z-index: 20;
  ${({ theme }) => renderTransition(theme.modal.modal.transition)}
  ${({ width }) => renderWidth(width)}

  ${({ theme }) => css`
    ${renderBorder(theme.modal.modal.border)}
    ${renderBackground(theme.modal.modal.background)}
    ${renderMargin(theme.modal.modal.margin)}
    ${renderPadding(theme.modal.modal.padding)}
    ${renderColor(theme.modal.modal.color)}
    ${renderRadius(theme.modal.modal.radius)}
    ${renderShadow(theme.modal.modal.shadow)}  
  `}

  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  open,
  onOpen,
  onClose,
  closeOnBackdrop = false,
  width = '60%'
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
    <_Backdrop visible={open}>
      <_Modal ref={modalRef} visible={open} width={width}>
        <_Header>
          <_Title>{title}</_Title>
          <_Close
            onClick={() => {
              if (onClose) onClose()
            }}
          >
            <Icon name="x" size={48}></Icon>
          </_Close>
        </_Header>
        <_Content>{children}</_Content>
      </_Modal>
    </_Backdrop>
  )
}
