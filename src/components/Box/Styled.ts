import styled, { css } from 'styled-components'

import {
  AlignContentProp,
  AlignProp,
  BackgroundProp,
  BasisProp,
  BorderProp,
  DirectionProp,
  GrowProp,
  GutterProp,
  HeightProp,
  JustifyProp,
  MarginProp,
  OverflowProp,
  PaddingProp,
  RadiusProp,
  SelfProp,
  ShadowProp,
  ShrinkProp,
  WidthProp,
  WrapProp
} from '../../types'
import {
  renderAlign,
  renderAlignContent,
  renderBackground,
  renderBasis,
  renderBorder,
  renderDirection,
  renderGrow,
  renderHeight,
  renderJustify,
  renderMargin,
  renderOverflow,
  renderPadding,
  renderRadius,
  renderSelf,
  renderShadow,
  renderShrink,
  renderValue,
  renderWidth,
  renderWrap
} from '../../utils'

interface _BoxProps {
  self: SelfProp
  margin: MarginProp
  align: AlignProp
  alignContent: AlignContentProp
  background: BackgroundProp
  basis: BasisProp
  border: BorderProp
  direction: DirectionProp
  shadow: ShadowProp
  grow: GrowProp
  shrink: ShrinkProp
  gutter: GutterProp
  height: HeightProp
  justify: JustifyProp
  overflow: OverflowProp
  padding: PaddingProp
  radius: RadiusProp
  width: WidthProp
  wrapping: WrapProp
}

interface _GutterProps {
  gutter: GutterProp
  direction: DirectionProp
}

const renderGutter = (gutter: GutterProp, direction: DirectionProp) => {
  if (typeof gutter === 'undefined') return

  if (direction === 'row') {
    return css`
      width: ${renderValue(gutter)};
    `
  } else {
    return css`
      height: ${renderValue(gutter)};
    `
  }
}

export const _Gutter = styled.div<_GutterProps>`
  ${({ gutter, direction }) => renderGutter(gutter, direction)}
`

export const _Box = styled.div<_BoxProps>`
  display: flex;
  box-sizing: border-box;
  ${({
    wrapping,
    overflow,
    radius,
    grow,
    shrink,
    basis,
    align,
    alignContent,
    justify,
    self,
    direction,
    shadow,
    border,
    margin,
    padding,
    width,
    height,
    background
  }) => css`
    ${renderWrap(wrapping)}
    ${renderOverflow(overflow)}
    ${renderRadius(radius)}
    ${renderGrow(grow)}
    ${renderShrink(shrink)}
    ${renderBasis(basis)}
    ${renderAlign(align)}
    ${renderAlignContent(alignContent)}
    ${renderJustify(justify)}
    ${renderSelf(self)}
    ${renderDirection(direction)}
    ${renderShadow(shadow)}
    ${renderBorder(border)}
    ${renderMargin(margin)}
    ${renderPadding(padding)}
    ${renderWidth(width)}
    ${renderHeight(height)}
    ${renderBackground(background)}
  `}/* ${({ wrapping }) => wrapping && renderWrap(wrapping)} */
  /* ${({ overflow }) => overflow && renderOverflow(overflow)} */
  /* ${({ radius }) => radius && renderRadius(radius)} */
  /* ${({ grow }) => grow && renderGrow(grow)} */
  /* ${({ shrink }) => shrink && renderShrink(shrink)} */
  /* ${({ basis }) => basis && renderBasis(basis)} */
  /* ${({ align }) => align && renderAlign(align)} */
  /* ${({ alignContent }) =>
    alignContent && renderAlignContent(alignContent)} */
  /* ${({ justify }) => justify && renderJustify(justify)} */
  /* ${({ self }) => renderSelf(self)} */
  /* ${({ direction }) => direction && renderDirection(direction)} */
  /* ${({ shadow }) => shadow && renderShadow(shadow)} */
  /* ${({ border }) => border && renderBorder(border)} */
  /* ${({ margin }) => margin && renderMargin(margin)} */
  /* ${({ padding }) => padding && renderPadding(padding)}
  ${({ background }) => background && renderBackground(background)}
  ${({ width }) => width && renderWidth(width)}
  ${({ height }) => height && renderHeight(height)} */
`
