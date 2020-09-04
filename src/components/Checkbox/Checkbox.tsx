import React from 'react'
import styled, { css } from 'styled-components'

import { RootComponent } from '../../types'
import {
  renderBorder,
  renderColor,
  renderBackground,
  renderRadius,
  renderMargin,
  renderShadow,
  renderTransition
} from '../../utils'

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement & RootComponent> {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string | React.ReactNode
}

interface _CheckboxProps {
  checked: boolean
}

const _Checkbox = styled.div<_CheckboxProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;

  ${({ theme }) => css`
    ${renderTransition(theme.checkbox.transition)}
    ${renderRadius(theme.checkbox.radius)}
    ${renderShadow(theme.checkbox.shadow)}
    ${renderBackground(theme.checkbox.inactive.background)}
    ${renderBorder(theme.checkbox.inactive.border)}
  `}

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid ${({ theme }) => theme.checkbox.color};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`

const _Fake = styled.input.attrs(() => ({ type: 'checkbox' }))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${_Checkbox} {
    ${({ theme }) => css`
      ${renderBackground(theme.checkbox.active.background)}
      ${renderBorder(theme.checkbox.active.border)}
    `}
  }

  &:checked ~ ${_Checkbox}:after {
    display: block;
  }
`

const _Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  position: relative;
  ${({ theme }) => renderMargin(theme.checkbox.margin)}
`

const _Caption = styled.div`
  padding-left: 30px;
`

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange
}) => {
  return (
    <_Label>
      <_Fake checked={checked} onChange={onChange}></_Fake>
      <_Checkbox checked={checked}></_Checkbox>
      <_Caption>{label}</_Caption>
    </_Label>
  )
}
