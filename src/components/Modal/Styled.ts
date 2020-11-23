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
  /* overflow: hidden; */
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
`

export const _Content = styled.div`
  position: relative;
  padding: 1rem;
  flex: 1 1 auto;
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100%;
  height: 100%;
  overflow-y: auto; */
`

export const _Close = styled.div`
  /* position: absolute;
  right: 0;
  top: 0; */
  border: 1px solid red;
  cursor: pointer;
`

export const _Dialog = styled.div`
  transform: translate(0, 0);
  position: relative;
  width: auto;
  pointer-events: none;

  /* @media (min-width: 576px) {
    max-width: 500px;
    margin: 1.75rem auto;
  } */
`

export const _Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  pointer-events: auto;
  border: 1px solid yellow;

  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  max-width: 100%;
  max-height: 100%;
`

export const _Modal = styled.div<_ModalProps>`
  z-index: 1010;
  position: fixed;
 
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

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

export const _Actions = styled.div``
