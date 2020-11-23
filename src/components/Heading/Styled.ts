import styled, { css } from 'styled-components'

import {
  renderBackground,
  renderBorder,
  renderColor,
  renderMargin,
  renderPadding
} from '../../utils'

interface _HeadingProps {
  level: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
}

interface _IconProps {
  visible: boolean
}

const Mapping: { [prop: string]: number } = {
  one: 2.2,
  two: 2,
  three: 1.8,
  four: 1.6,
  five: 1.4,
  six: 1.2
}

export const _Heading = styled.div<_HeadingProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme, level }) => css`
    ${renderBorder(theme.heading.border)}
    ${renderBackground(theme.heading.background)}
    ${renderMargin(theme.heading.margin)}
    ${renderPadding(theme.heading.padding)}
    ${renderColor(theme.heading.color)}
    font-size: ${Mapping[level]}em;
  `}
`

export const _Icon = styled.div<_IconProps>`
  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}

  padding-right: 8px;
`
