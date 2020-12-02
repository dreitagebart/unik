import styled from 'styled-components'

interface _TabTitleProps {
  active: boolean
}

export const _Tabs = styled.div``

export const _TabHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #cfcfcf;
`

export const _TabTitle = styled.div<_TabTitleProps>`
  cursor: pointer;
  padding: 8px 16px;
  border-bottom: 2px solid
    ${({ active }) => (active ? 'rgb(3, 102, 214)' : 'transparent')};
`

export const _TabContent = styled.div`
  padding: 8px;
`
