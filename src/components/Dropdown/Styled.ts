import styled, { css } from 'styled-components'

interface Bounds {
  top: number
  left: number
}

interface _ItemProps {
  active: boolean
}

interface _ResultProps {
  open: boolean
  bounds: Bounds
}

interface _WrapperProps {
  inline: boolean
}

interface _IconProps {
  visible: boolean
}

export const _Search = styled.input`
  border: 0;
  background: transparent;
  outline: none;
  width: 100%;
  font: inherit;
`

export const _Icon = styled.div<_IconProps>`
  ${({ visible }) =>
    visible
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`

export const _Wrapper = styled.div<_WrapperProps>`
  width: 100%;
  ${({ inline }) =>
    inline
      ? css`
          display: inline-block;
        `
      : css`
          display: block;
        `}
`

export const _Title = styled.div`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding: 8px;
`

export const _Divider = styled.div`
  border-bottom: 1px solid #cfcfcf;
`

export const _Item = styled.div<_ItemProps>`
  cursor: pointer;
  padding: 8px;
  ${({ active }) =>
    active &&
    css`
      background: #efefef;
    `}
`

export const _Result = styled.div<_ResultProps>`
  margin-top: 4px;
  border-radius: 4px;
  border: 1px solid #cfcfcf;
  position: absolute;
  background: #ffffff;
  transition: all 300ms ease-in;
  transform-origin: left top;
  transform-style: preserve-3d;
  ${({ bounds: { top, left } }) => css`
    top: ${top}px;
    left: ${left}px;
  `}

  ${({ open }) =>
    open
      ? css`
          transform: scale(1);
          opacity: 1;
          visibility: visible;
          z-index: 1;
        `
      : css`
          transform: scale(0);
          opacity: 0;
          visibility: hidden;
          z-index: -1;
        `}
`

export const _Button = styled.div`
  cursor: pointer;
  white-space: nowrap;
  word-break: keep-all;
`

export const _Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
