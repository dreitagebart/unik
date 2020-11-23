import React from 'react'
import styled, { css } from 'styled-components'

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

export interface TextAreaProps
  extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'width'> {
  width?: WidthProp
}

interface _WrapperProps {
  width: WidthProp
}

const _Wrapper = styled.div<_WrapperProps>`
  ${({ width }) => renderWidth(width)}
`

const _TextArea = styled.textarea`
  width: 100%;
  outline: 0;
  line-height: 1.5em;

  ${({ theme }) => css`
    ${renderTransition(theme.textarea.transition)}
    ${renderBorder(theme.textarea.border)}
    ${renderMargin(theme.textarea.margin)}
    ${renderPadding(theme.textarea.padding)}
    ${renderBackground(theme.textarea.background)}
    ${renderRadius(theme.textarea.radius)}
    ${renderColor(theme.textarea.color)}
    ${renderShadow(theme.textarea.shadow)}
    ${renderCSS(theme.textarea.css)}

    &:hover {
      ${renderBorder(theme.textarea.hover.border)}
      ${renderMargin(theme.textarea.hover.margin)}
      ${renderPadding(theme.textarea.hover.padding)}
      ${renderBackground(theme.textarea.hover.background)}
      ${renderRadius(theme.textarea.hover.radius)}
      ${renderColor(theme.textarea.hover.color)}
      ${renderShadow(theme.textarea.hover.shadow)}
      ${renderCSS(theme.textarea.hover.css)}
    }

    &:focus {
      ${renderBorder(theme.textarea.focus.border)}
      ${renderMargin(theme.textarea.focus.margin)}
      ${renderPadding(theme.textarea.focus.padding)}
      ${renderBackground(theme.textarea.focus.background)}
      ${renderRadius(theme.textarea.focus.radius)}
      ${renderColor(theme.textarea.focus.color)}
      ${renderShadow(theme.textarea.focus.shadow)}
      ${renderCSS(theme.textarea.focus.css)}
    }
  `}
`

export const TextArea: React.FC<TextAreaProps> = ({
  width = '100%',
  ...rest
}) => {
  return (
    <_Wrapper width={width}>
      <_TextArea {...rest}></_TextArea>
    </_Wrapper>
  )
}
