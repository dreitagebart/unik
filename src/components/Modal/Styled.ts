import styled, { css } from 'styled-components'

import { HeightProp, WidthProp } from '../../types'
import {
  renderBackground,
  renderBorder,
  renderColor,
  renderHeight,
  renderMargin,
  renderPadding,
  renderRadius,
  renderShadow,
  renderTransition,
  renderWidth
} from '../../utils'

interface _BackdropProps {
  visible: boolean
}

interface _ActionsProps {
  align: 'left' | 'center' | 'right'
}

interface _ModalProps {
  plain: boolean
  visible: boolean
  width: WidthProp
  height: HeightProp
}

export const _Backdrop = styled.div<_BackdropProps>`
  ${({ theme }) =>
    css`
      ${renderTransition(theme.modal.backdrop.transition)}
      ${renderBackground(theme.modal.backdrop.background)}
    `}

  overflow-y: auto;
  overflow-x: hidden;

  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
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

export const _Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const _Content = styled.div`
  position: relative;
  flex: 1 1 auto;
`

export const _Modal = styled.div<_ModalProps>`
  z-index: 1010;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${({ theme }) => renderTransition(theme.modal.modal.transition)}
  ${({ width }) => renderWidth(width)}
  ${({ height }) => renderHeight(height)}

  ${({ theme, plain }) =>
    !plain &&
    css`
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

export const _Actions = styled.div<_ActionsProps>`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ align }) => {
    switch (align) {
      case 'left': {
        return css`
          justify-content: flex-start;
        `
      }
      case 'center': {
        return css`
          justify-content: center;
        `
      }
      case 'right': {
        return css`
          justify-content: flex-end;
        `
      }
    }
  }}
`
