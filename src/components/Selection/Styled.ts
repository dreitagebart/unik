import styled, { css } from 'styled-components'

import { WidthProp } from '../../types'
import {
  renderBorder,
  renderRadius,
  renderShadow,
  renderBackground,
  renderMargin,
  renderPadding,
  renderWidth,
  renderColor
} from '../../utils'

interface _SelectionProps {
  plain: boolean
}

interface _ListProps {
  open: boolean
  width: WidthProp
}

interface _WrapperProps {
  width: WidthProp
}

const renderVisibility = (open: boolean) => {
  if (open)
    return css`
      opacity: 1;
      visibility: visible;
    `

  return css`
    opacity: 0;
    visibility: hidden;
  `
}

export const _Wrapper = styled.div<_WrapperProps>`
  ${({ width }) => renderWidth(width)}
`

export const _Title = styled.div``

export const _Selection = styled.div<_SelectionProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme, plain }) => {
    return css`
      ${renderColor(theme.selection.selection.color)}
      ${!plain && renderBorder(theme.selection.selection.border)}
      ${renderShadow(theme.selection.selection.shadow)}
      ${!plain && renderBackground(theme.selection.selection.background)}
      ${renderMargin(theme.selection.selection.margin)}
      ${renderPadding(theme.selection.selection.padding)}
      ${renderRadius(theme.selection.selection.radius)}
    `
  }}
`

export const _Inner = styled.div`
  width: 100%;
  padding-right: 8px;
`

export const _Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  ${({ theme }) => {
    return css`
      ${renderColor(theme.selection.item.color)}
      ${renderBorder(theme.selection.item.border)}
      ${renderShadow(theme.selection.item.shadow)}
      ${renderBackground(theme.selection.item.background)}
      ${renderMargin(theme.selection.item.margin)}
      ${renderPadding(theme.selection.item.padding)}
      ${renderRadius(theme.selection.item.radius)}
    `
  }}
`

export const _ResultList = styled.div`
  width: 100%;
  position: relative;
`

export const _List = styled.div<_ListProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border: 1px solid red;

  transition: all 0.3s ease-in-out;
  ${({ open, width }) =>
    css`
      ${renderVisibility(open)}
      ${renderWidth(width)}
    `}

  ${({ theme }) => {
    return css`
      ${renderBorder(theme.selection.resultList.border)}
      ${renderShadow(theme.selection.resultList.shadow)}
      ${renderBackground(theme.selection.resultList.background)}
      ${renderMargin(theme.selection.resultList.margin)}
      ${renderPadding(theme.selection.resultList.padding)}
      ${renderRadius(theme.selection.resultList.radius)}
    `
  }}
`

export const _Input = styled.input.attrs(() => ({ type: 'text' }))`
  cursor: text;
  font: inherit;
  background: transparent;
  border: 0;
  outline: 0;
`
