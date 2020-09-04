import React from 'react'
import styled from 'styled-components'

export interface ItemProps {}

const Wrapper = styled.div``

export const Item: React.FC<ItemProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
