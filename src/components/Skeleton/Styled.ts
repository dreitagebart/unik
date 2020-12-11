import styled, { css, keyframes } from 'styled-components'

import { ColorProp, HeightProp, MarginProp, WidthProp } from '../../types'
import { renderHeight, renderMargin, renderWidth } from '../../utils'

interface _RectProps {
  width: WidthProp
  height: HeightProp
  margin: MarginProp
}

interface _CircleProps {
  size: WidthProp
  margin: MarginProp
}

const shimmer = keyframes`
  0%{
    background-position: -468px 0
  }
  100%{
    background-position: 468px 0
  }
`

const animation = (primary: ColorProp, secondary: ColorProp) => css`
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(
    to right,
    ${primary} 10%,
    ${secondary} 20%,
    ${primary} 40%
  );
  background-size: 1000px 1000px;
  position: relative;
`

export const _Rect = styled.div<_RectProps>`
  border-radius: 4px;
  ${({ width, height, margin }) => css`
    ${renderMargin(margin)}
    ${renderWidth(width)}
    ${renderHeight(height)}
  `}

  ${({ theme }) =>
    animation(theme.skeleton.primaryColor, theme.skeleton.secondaryColor)}
`

export const _Circle = styled.div<_CircleProps>`
  border-radius: 100%;

  ${({ size, margin }) => css`
    ${renderMargin(margin)}
    ${renderWidth(size)}
    ${renderHeight(size)}
  `}

  ${({ theme }) =>
    animation(theme.skeleton.primaryColor, theme.skeleton.secondaryColor)}
`
