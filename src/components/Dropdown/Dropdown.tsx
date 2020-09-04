import React from 'react'
import styled from 'styled-components'

export interface DropdownProps {
  label: string
  background?: string
}

interface WrapperProps {
  background: string
}

const Wrapper = styled.button<Partial<WrapperProps>>`
  background: ${({ background }) => background};
`

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  label,
  background
}) => {
  return <Wrapper background={background}>{children || label}</Wrapper>
}
