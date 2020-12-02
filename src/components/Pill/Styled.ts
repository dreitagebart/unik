import styled, { css } from 'styled-components'

import {
  renderBackground,
  renderBorder,
  renderColor,
  renderCSS,
  renderMargin,
  renderPadding,
  renderRadius
} from '../../utils'

export const _Pill = styled.div`
  ${({ theme }) => css`
    ${renderMargin(theme.pill.margin)}
    ${renderPadding(theme.pill.padding)}
    ${renderBackground(theme.pill.background)}
    ${renderBorder(theme.pill.border)}
    ${renderColor(theme.pill.color)}
    ${renderRadius(theme.pill.radius)}
    ${renderCSS(theme.pill.css)}
  `}
`
