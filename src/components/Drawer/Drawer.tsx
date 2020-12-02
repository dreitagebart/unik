import React, { useEffect, Fragment } from 'react'
import styled, { css } from 'styled-components'

import { WidthProp } from '../../types'
import {
  renderWidth,
  renderHeight,
  renderTranslateX,
  renderTranslateY,
  renderTransition,
  renderColor,
  renderBorder,
  renderBackground,
  renderPadding,
  renderShadow,
  renderRadius
} from '../../utils'
import { Icon } from '../Icon'
import { Portal } from '../Portal'

type Position = 'left' | 'bottom' | 'right' | 'top'

type CloseIcon = 'left' | 'right' | 'none'

export interface DrawerProps {
  open: boolean
  closeOnBackdrop?: boolean
  closeIcon?: CloseIcon
  onOpen?: () => void
  onClose?: () => void
  size?: WidthProp
  position?: Position
}

interface _BackdropProps {
  visible: boolean
}

interface _DrawerProps {
  size: WidthProp
  position: Position
  visible: boolean
}

interface _BarProps {
  closeIcon: CloseIcon
}

const _Bar = styled.div<_BarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ closeIcon }) =>
    closeIcon === 'none'
      ? css`
          display: none;
        `
      : closeIcon === 'left'
      ? css`
          justify-content: flex-start;
        `
      : css`
          justify-content: flex-end;
        `};
`

const _Backdrop = styled.div<_BackdropProps>`
  z-index: 10;
  ${({ theme }) =>
    css`
      ${renderTransition(theme.drawer.backdrop.transition)}
      ${renderBackground(theme.drawer.backdrop.background)}
    `}

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all 0.3s ease-in;

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

const _Close = styled.div`
  display: inline-block;
  cursor: pointer;
`

const _Drawer = styled.div<_DrawerProps>`
  z-index: 20;
  position: fixed;
  overflow-x: hidden;
  ${({ theme }) =>
    css`
      ${renderTransition(theme.drawer.drawer.transition)}
      ${renderColor(theme.drawer.drawer.color)}
      ${renderBorder(theme.drawer.drawer.border)}
      ${renderBackground(theme.drawer.drawer.background)}
      ${renderPadding(theme.drawer.drawer.padding)}
      ${renderShadow(theme.drawer.drawer.shadow)}
      ${renderRadius(theme.drawer.drawer.radius)}
    `}

  ${({ position, visible, size }) =>
    position === 'left'
      ? css`
          ${renderTranslateX(
            visible ? 0 : typeof size === 'number' ? size * -1 : `-${size}`
          )}
          ${renderWidth(size)}
          height: 100%;
          top: 0;
          left: 0;
        `
      : position === 'top'
      ? css`
          ${renderTranslateY(
            visible ? 0 : typeof size === 'number' ? size * -1 : `-${size}`
          )}
          ${renderHeight(size)}
          width: 100%;
          top: 0;
        `
      : position === 'bottom'
      ? css`
          ${renderTranslateY(visible ? 0 : size)}
          ${renderHeight(size)}
          width: 100%;
          bottom: 0;
        `
      : position === 'right'
      ? css`
          ${renderTranslateX(visible ? 0 : size)}
          ${renderWidth(size)}
          height: 100%;
          top: 0;
          right: 0;
        `
      : null}

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

export const Drawer: React.FC<DrawerProps> = ({
  position = 'left',
  closeIcon = 'left',
  closeOnBackdrop = false,
  onOpen,
  onClose,
  open,
  size = 250,
  children
}) => {
  useEffect(() => {
    if (open && onOpen) onOpen()
  }, [open])

  return (
    <Portal>
      <_Backdrop
        visible={open}
        onClick={() => {
          if (closeOnBackdrop && onClose) onClose()
        }}
      ></_Backdrop>
      <_Drawer size={size} position={position} visible={open}>
        <_Bar closeIcon={closeIcon}>
          <_Close
            onClick={() => {
              if (onClose) onClose()
            }}
          >
            <Icon name="x" size={48}></Icon>
          </_Close>
        </_Bar>
        {children}
      </_Drawer>
    </Portal>
  )
}
