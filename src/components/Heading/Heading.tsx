import React from 'react'
import styled, { css } from 'styled-components'
import {
  renderBackground,
  renderMargin,
  renderPadding,
  renderColor,
  renderBorder
} from '../../utils'

const Mapping: { [prop: string]: number } = {
  one: 2.2,
  two: 2,
  three: 1.8,
  four: 1.6,
  five: 1.4,
  six: 1.2
}

export interface HeadingProps {
  icon: React.ReactNode
  children: any
  level?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
}

interface _HeadingProps {
  level: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
}

interface _IconProps {
  visible: boolean
}

const _Heading = styled.div<_HeadingProps>`
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

const _Icon = styled.div<_IconProps>`
  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}

  padding-right: 8px;
`

export const Heading: React.FC<HeadingProps> = ({
  icon,
  children,
  level = 'one'
}) => {
  return (
    <_Heading level={level}>
      <_Icon visible={!!icon}>{icon}</_Icon>
      <div>{children}</div>
    </_Heading>
  )
}
