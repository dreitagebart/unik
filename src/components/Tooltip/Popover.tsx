import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import debounce from 'lodash.debounce'

export interface Coords {
  top: number
  left: number
}

export interface PopoverProps {
  active: boolean
  // updateTooltipCoords: () => void
  coords: Coords
}

interface _PopoverProps {
  top: number
  left: number
  active: boolean
}

const _Popover = styled.div<_PopoverProps>`
  /* border: 1px solid red; */
  position: absolute;
  transition: all 0.3s ease-in;
  /* transform: translate(-100px, -100%); */

  ${({ active }) =>
    active
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `};
`

export const Popover: React.FC<PopoverProps> = ({
  active,
  children,
  coords
  // updateTooltipCoords
}) => {
  // const updateCoords = debounce(updateTooltipCoords, 100)

  // useEffect(() => {
  //   console.log('add event listener resize')
  //   window.addEventListener('resize', updateCoords)

  //   return () => {
  //     console.log('remove event listener resize')
  //     window.removeEventListener('resize', updateCoords)
  //   }
  // }, [])

  return (
    <_Popover active={active} {...coords}>
      {children}
    </_Popover>
  )
}
