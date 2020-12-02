import styled from 'styled-components'

import { ErrorType } from '../../types'

interface _ToastProps {
  active: boolean
  type: ErrorType
}

export const _Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  border: 1px solid red;
`

export const _Toast = styled.div<_ToastProps>`
  transition: all 300ms ease-in-out;
  transform: translateX(${({ active }) => (active ? '0' : '100%')});
  margin: 16px;
  width: 200px;
  position: relative;
  padding: 16px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  background: #ffffff;
`
