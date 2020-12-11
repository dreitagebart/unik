import styled, { css } from 'styled-components'

import {
  BackgroundProp,
  BottomProp,
  HeightProp,
  LeftProp,
  PositionProp,
  RightProp,
  TopProp,
  WidthProp,
  ZIndexProp
} from '../../types'
import {
  renderBackground,
  renderHeight,
  renderOrientation,
  renderPosition,
  renderWidth,
  renderZIndex
} from '../../utils'

interface _LayerProps {
  background: BackgroundProp
  width: WidthProp
  height: HeightProp
  zIndex: ZIndexProp
  position: PositionProp
  left: LeftProp
  right: RightProp
  bottom: BottomProp
  top: TopProp
}

export const _Layer = styled.div<_LayerProps>`
  ${({
    position,
    top,
    background,
    left,
    right,
    bottom,
    zIndex,
    width,
    height
  }) => css`
    ${renderBackground(background)}
    ${renderWidth(width)}
    ${renderHeight(height)}
    ${renderZIndex(zIndex)}
    ${renderPosition(position)}
    ${renderOrientation(top, 'top')}
    ${renderOrientation(left, 'left')}
    ${renderOrientation(bottom, 'bottom')}
    ${renderOrientation(right, 'right')}
  `}
`
