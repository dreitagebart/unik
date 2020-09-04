import React from 'react'
import styled, { css } from 'styled-components'

import { RootComponent } from '../../types'
import {
  renderBorder,
  renderBackground,
  renderRadius,
  renderShadow,
  renderMargin,
  renderTransition
} from '../../utils'

export interface RadiobuttonProps
  extends React.InputHTMLAttributes<HTMLInputElement & RootComponent> {
  group: string
  checked?: boolean
  label?: string | React.ReactNode
}

const _Radiobutton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;

  ${({ theme }) => css`
    ${renderTransition(theme.radiobutton.transition)}
    ${renderRadius(theme.radiobutton.radius)}
    ${renderShadow(theme.radiobutton.shadow)}
    ${renderBackground(theme.radiobutton.inactive.background)}
    ${renderBorder(theme.radiobutton.inactive.border)}
  `}

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.radiobutton.color};
  }
`

const _Fake = styled.input.attrs(() => ({ type: 'radio' }))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${_Radiobutton} {
    ${({ theme }) => css`
      ${renderBackground(theme.radiobutton.active.background)}
      ${renderBorder(theme.radiobutton.active.border)}
    `}
  }

  &:checked ~ ${_Radiobutton}:after {
    display: block;
  }
`

const _Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  position: relative;
  ${({ theme }) => renderMargin(theme.radiobutton.margin)}
`

const _Caption = styled.div`
  padding-left: 30px;
`

export const Radiobutton: React.FC<RadiobuttonProps> = ({
  group,
  value,
  label,
  checked,
  onChange
}) => {
  return (
    <_Label>
      <_Fake
        onChange={onChange}
        value={value}
        name={group}
        defaultChecked={checked}
      ></_Fake>
      <_Radiobutton></_Radiobutton>
      <_Caption>{label}</_Caption>
    </_Label>
  )
}
