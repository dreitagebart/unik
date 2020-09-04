import React, { Fragment } from 'react'
import styled, { StyledComponent, css } from 'styled-components'

import { WidthProp } from '../../types'
import {
  renderWidth,
  renderBorder,
  renderMargin,
  renderPadding,
  renderBackground,
  renderRadius,
  renderColor,
  renderShadow,
  renderTransition,
  renderCSS
} from '../../utils'

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width'> {
  width?: WidthProp
}

interface _WrapperProps {
  width: WidthProp
}

const _Wrapper = styled.div<_WrapperProps>`
  ${({ width }) => renderWidth(width)}
`

const _TextInput = styled.input`
  width: 100%;
  outline: 0;
  line-height: 1.5em;

  ${({ theme }) => css`
    ${renderTransition(theme.textinput.transition)}
    ${renderBorder(theme.textinput.border)}
    ${renderMargin(theme.textinput.margin)}
    ${renderPadding(theme.textinput.padding)}
    ${renderBackground(theme.textinput.background)}
    ${renderRadius(theme.textinput.radius)}
    ${renderColor(theme.textinput.color)}
    ${renderShadow(theme.textinput.shadow)}
    ${renderCSS(theme.textinput.css)}

    &:hover {
      ${renderBorder(theme.textinput.hover.border)}
      ${renderMargin(theme.textinput.hover.margin)}
      ${renderPadding(theme.textinput.hover.padding)}
      ${renderBackground(theme.textinput.hover.background)}
      ${renderRadius(theme.textinput.hover.radius)}
      ${renderColor(theme.textinput.hover.color)}
      ${renderShadow(theme.textinput.hover.shadow)}
      ${renderCSS(theme.textinput.hover.css)}
    }

    &:focus {
      ${renderBorder(theme.textinput.focus.border)}
      ${renderMargin(theme.textinput.focus.margin)}
      ${renderPadding(theme.textinput.focus.padding)}
      ${renderBackground(theme.textinput.focus.background)}
      ${renderRadius(theme.textinput.focus.radius)}
      ${renderColor(theme.textinput.focus.color)}
      ${renderShadow(theme.textinput.focus.shadow)}
      ${renderCSS(theme.textinput.focus.css)}
    }
  `}
`

export const TextInput: React.FC<TextInputProps> = ({
  width = '100%',
  ...rest
}) => {
  return (
    <_Wrapper width={width}>
      <_TextInput type="text" {...rest}></_TextInput>
    </_Wrapper>
  )
}
