import styled, { css } from 'styled-components'

interface _SpaceProps {
  size: number
  mode: 'width' | 'height'
}

export const _Space = styled.div<_SpaceProps>`
  display: inline-block;
  ${({ mode, size }) =>
    mode === 'width'
      ? css`
          width: ${size}px;
        `
      : css`
          height: ${size}px;
        `}
`
