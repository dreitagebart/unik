import styled, { css } from 'styled-components'

import {
  renderBorder,
  renderBackground,
  renderRadius,
  renderMargin,
  renderShadow,
  renderTransition
} from '../../utils'

interface _CheckboxProps {
  checked: boolean
}

export const _Checkbox = styled.div<_CheckboxProps>`
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

export const _Fake = styled.input.attrs(() => ({ type: 'checkbox' }))`
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

export const _Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  position: relative;
  ${({ theme }) => renderMargin(theme.checkbox.margin)}
`

export const _Caption = styled.div`
  padding-left: 30px;
`

export const _Wrapper = styled.div`
  display: inline-block;
  border: 1px solid red;
`
