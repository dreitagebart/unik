import { position } from 'polished'
import styled, { css } from 'styled-components'

import { ErrorType, WidthProp } from '../../types'
import {
  renderBackground,
  renderBorder,
  renderColor,
  renderMargin,
  renderPadding,
  renderRadius,
  renderShadow
} from '../../utils'
import { Position } from './Provider'

interface _ToastProps {
  width: WidthProp
  type: ErrorType
  position: Position
}

interface _ContainerProps {
  position: Position
}

const renderPosition = (position: Position) => {
  switch (position) {
    case 'bottomLeft': {
      return css`
        transform: translateX(-100%);
      `
    }
    case 'topLeft': {
      return css`
        transform: translateX(-100%);
      `
    }
    case 'bottomRight': {
      return css`
        transform: translateX(100%);
      `
    }
    case 'topLeft': {
      return css`
        transform: translateX(100%);
      `
    }
  }
}

export const _Container = styled.div<_ContainerProps>`
  position: absolute;
  z-index: 100;
  overflow: hidden;
  /* width: 100%;
  height: 100%; */
  /* top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  /* border: 1px solid red; */
  ${({ position }) => {
    switch (position) {
      case 'topLeft': {
        return css`
          top: 0;
          left: 0;
        `
      }
      case 'topRight': {
        return css`
          top: 0;
          right: 0;
        `
      }
      case 'bottomLeft': {
        return css`
          bottom: 0;
          left: 0;
        `
      }
      case 'bottomRight': {
        return css`
          bottom: 0;
          right: 0;
        `
      }
    }
  }}

  ${({ theme }) =>
    css`
      ${renderPadding(theme.toast.container.padding)}
    `}
`

export const _Toast = styled.div<_ToastProps>`
  position: relative;
  ${({ theme }) =>
    css`
      ${renderShadow(theme.toast.toast.shadow)}
      ${renderMargin(theme.toast.toast.margin)}
      ${renderPadding(theme.toast.toast.padding)}
      ${renderRadius(theme.toast.toast.radius)}
    `}
  ${({ type, theme }) => {
    switch (type) {
      case 'error': {
        return css`
          ${renderBorder(theme.toast.toast.error.border)}
          ${renderBackground(theme.toast.toast.error.background)}
          ${renderColor(theme.toast.toast.error.color)}
        `
      }
      case 'success': {
        return css`
          ${renderBorder(theme.toast.toast.success.border)}
          ${renderBackground(theme.toast.toast.success.background)}
          ${renderColor(theme.toast.toast.success.color)}
        `
      }
      case 'info': {
        return css`
          ${renderBorder(theme.toast.toast.info.border)}
          ${renderBackground(theme.toast.toast.info.background)}
          ${renderColor(theme.toast.toast.info.color)}
        `
      }
      case 'warning': {
        return css`
          ${renderBorder(theme.toast.toast.warning.border)}
          ${renderBackground(theme.toast.toast.warning.background)}
          ${renderColor(theme.toast.toast.warning.color)}
        `
      }
    }
  }}

  & .fade-appear {
    opacity: 0;
    transform: translateX(100%);
  }

  & .fade-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms ease-in-out;
  }

  & .fade-enter {
    opacity: 0;
    ${({ position }) => renderPosition(position)}
  }

  & .fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms ease-in-out;
  }

  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.fade-exit-active {
    opacity: 0;
    ${({ position }) => renderPosition(position)}
    transition: all 500ms ease-in-out;
  }
`
