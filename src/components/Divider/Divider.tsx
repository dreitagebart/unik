import React from 'react'
import styled, { css } from 'styled-components'

export interface DividerProps {
  children?: string | React.ReactNode
  orientation?: 'left' | 'center' | 'right'
}

interface _DividerProps {
  orientation: 'left' | 'center' | 'right'
}

const _Divider = styled.div<_DividerProps>`
  display: flex;
  align-items: center;

  &:before,
  &:after {
    content: '';
    height: 1px;
    flex-grow: 1;
  }

  &:before {
    ${({ orientation }) =>
      orientation === 'left' &&
      css`
        flex-grow: 0.1;
      `}
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 30%,
      rgba(0, 0, 0, 0.7) 100%
    );
    ${({ children }) =>
      children &&
      css`
        margin-right: 1rem;
      `}
  }

  &:after {
    ${({ orientation }) =>
      orientation === 'right' &&
      css`
        flex-grow: 0.1;
      `}
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 70%,
      rgba(0, 0, 0, 0) 100%
    );
    ${({ children }) =>
      children &&
      css`
        margin-left: 1rem;
      `}
  }
`

export const Divider: React.FC<DividerProps> = ({
  children,
  orientation = 'center'
}) => {
  return <_Divider orientation={orientation}>{children}</_Divider>
}
