import styled, { css } from 'styled-components'

import { Icon } from '../Icon'
import {
  renderBackground,
  renderBorder,
  renderMargin,
  renderPadding,
  renderRadius,
  renderShadow,
  renderTransition
} from '../../utils'

interface _ContentProps {
  level: number
}

interface _ItemProps {
  clickable: boolean
}

interface _ItemsProps {
  visible: boolean
}

interface _IconProps {
  expanded: boolean
}

interface _WrapperProps {
  level: number
}

export const _Tree = styled.div`
  ${({ theme }) => css`
    ${renderShadow(theme.tree.tree.shadow)};
    ${renderMargin(theme.tree.tree.margin)};
    ${renderPadding(theme.tree.tree.padding)};
    ${renderBackground(theme.tree.tree.background)};
    ${renderBorder(theme.tree.tree.border)};
  `}
`

export const _Wrapper = styled.div<_WrapperProps>``

export const _Item = styled.div<_ItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}

  ${({ theme }) => css`
    ${renderTransition(theme.tree.item.transition)}
    ${renderBackground(theme.tree.item.background)}
      ${renderMargin(theme.tree.item.margin)}
      ${renderPadding(theme.tree.item.padding)}
      ${renderBorder(theme.tree.item.border)}
      ${renderShadow(theme.tree.item.shadow)}
      ${renderRadius(theme.tree.item.radius)}
  
      &:hover {
      ${renderBackground(theme.tree.item.hover.background)}
      ${renderBorder(theme.tree.item.hover.border)}
        ${renderShadow(theme.tree.item.hover.shadow)}
    }
  `}
`

export const _Content = styled.div<_ContentProps>`
  margin-left: 24px;
  overflow: hidden;
`

export const _Label = styled.div`
  cursor: pointer;
`

export const _Icon = styled(Icon)<_IconProps>`
  /* padding-right: 4px; */
  /* transition: transform 300ms ease-out;
  transform-style: preserve-3d;
  transform: rotate(${({ expanded }) => (expanded ? '90deg' : '0deg')}); */
`

export const _Items = styled.div<_ItemsProps>`
  transition: all 300ms ease-in-out;

  ${({ visible }) =>
    visible
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          height: 0;
          transform: translateY(-100%);
        `}
`
