import styled, { css } from 'styled-components'

import { WidthProp } from '../../types'
import {
  renderWidth,
  renderTransition,
  renderBorder,
  renderMargin,
  renderPadding,
  renderBackground,
  renderRadius,
  renderColor,
  renderShadow,
  renderCSS
} from '../../utils'

interface _WrapperProps {
  width: WidthProp
}

interface _TextInputProps {
  plain: boolean
}

export const _Wrapper = styled.div<_WrapperProps>`
  ${({ width }) => renderWidth(width)}
`

export const _TextInput = styled.input<_TextInputProps>`
  width: 100%;
  outline: 0;
  line-height: 1.5em;

  ${({ theme, plain }) => css`
    ${plain
      ? css`
          border: 0;
          background: transparent;
        `
      : css`
          ${renderBorder(theme.textinput.border)}
          ${renderBackground(theme.textinput.background)}
      ${renderRadius(theme.textinput.radius)}
      ${renderShadow(theme.textinput.shadow)}
        `}
    ${renderColor(theme.textinput.color)}
    ${renderTransition(theme.textinput.transition)}
    ${renderMargin(theme.textinput.margin)}
    ${renderPadding(theme.textinput.padding)}
    ${renderCSS(theme.textinput.css)}

    &:hover {
      ${!plain &&
      css`
        ${renderBorder(theme.textinput.hover.border)}
        ${renderBackground(theme.textinput.hover.background)}
        ${renderShadow(theme.textinput.hover.shadow)}
        ${renderRadius(theme.textinput.hover.radius)}
      `}
      ${renderMargin(theme.textinput.hover.margin)}
      ${renderPadding(theme.textinput.hover.padding)}
      ${renderColor(theme.textinput.hover.color)}
      ${renderCSS(theme.textinput.hover.css)}
    }

    &:focus {
      ${!plain &&
      css`
        ${renderBackground(theme.textinput.focus.background)}
        ${renderBorder(theme.textinput.focus.border)}
        ${renderRadius(theme.textinput.focus.radius)}
        ${renderShadow(theme.textinput.focus.shadow)}
      `}
      ${renderMargin(theme.textinput.focus.margin)}
      ${renderPadding(theme.textinput.focus.padding)}
      ${renderColor(theme.textinput.focus.color)}
      ${renderCSS(theme.textinput.focus.css)}
    }
  `}
`
