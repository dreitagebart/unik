import React from 'react'
import styled from 'styled-components'

export interface GroupProps {
  children: any
}

interface _GroupProps {}

const _Group = styled.div<_GroupProps>``

export const Group: React.FC<GroupProps> = ({ children }) => {
  return <_Group>{children}</_Group>
}
