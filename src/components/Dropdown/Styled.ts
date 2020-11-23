import styled, { css } from 'styled-components'

import { WidthProp } from '../../types'
import {
  renderColor,
  renderBorder,
  renderShadow,
  renderBackground,
  renderMargin,
  renderPadding,
  renderRadius,
  renderWidth
} from '../../utils'

interface _DropdownProps {
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
      ${renderBorder(theme.dropdown.resultList.border)}
      ${renderShadow(theme.dropdown.resultList.shadow)}
      ${renderBackground(theme.dropdown.resultList.background)}
      ${renderMargin(theme.dropdown.resultList.margin)}
      ${renderPadding(theme.dropdown.resultList.padding)}
      ${renderRadius(theme.dropdown.resultList.radius)}
    `
  }}
`

export const _Dropdown = styled.div<_DropdownProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme, plain }) => {
    return css`
      ${renderColor(theme.dropdown.dropdown.color)}
      ${!plain && renderBorder(theme.dropdown.dropdown.border)}
      ${renderShadow(theme.dropdown.dropdown.shadow)}
      ${!plain && renderBackground(theme.dropdown.dropdown.background)}
      ${renderMargin(theme.dropdown.dropdown.margin)}
      ${renderPadding(theme.dropdown.dropdown.padding)}
      ${renderRadius(theme.dropdown.dropdown.radius)}
    `
  }}
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
      ${renderColor(theme.dropdown.item.color)}
      ${renderBorder(theme.dropdown.item.border)}
      ${renderShadow(theme.dropdown.item.shadow)}
      ${renderBackground(theme.dropdown.item.background)}
      ${renderMargin(theme.dropdown.item.margin)}
      ${renderPadding(theme.dropdown.item.padding)}
      ${renderRadius(theme.dropdown.item.radius)}
    `
  }}
`
