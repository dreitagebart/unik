import React from 'react'
import styled from 'styled-components'

export interface ImageProps {
  size: number
  source: string
}

interface WrapperProps {
  size: number
}

const Wrapper = styled.img<WrapperProps>`
  width: ${({ size }) => size}px;
  height: auto;
`

export const Image: React.FC<ImageProps> = ({ source, size }) => {
  return <Wrapper size={size} src={source}></Wrapper>
}
