import React from 'react'

import { _Label, _Caption, _Checkbox, _Fake, _Wrapper } from './Styled'
import { RootComponent } from '../../types'

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement & RootComponent> {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string | React.ReactNode
}

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  label,
  checked,
  onChange
}) => {
  return (
    <_Wrapper>
      <_Label>
        <_Fake checked={checked} onChange={onChange}></_Fake>
        <_Checkbox checked={checked}></_Checkbox>
        <_Caption>{label || children}</_Caption>
      </_Label>
    </_Wrapper>
  )
}
