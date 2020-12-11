import React from 'react'
import Helmet from 'react-helmet'
import merge from 'lodash.merge'
import { createGlobalStyle, ThemeProvider, css } from 'styled-components'
import { normalize } from 'polished'

import { DeepPartial, UnikTheme } from '../../types'
import { themeDefault } from './themes/default'
import { renderFontFamily, renderFontSize } from '../../utils'

interface Props {
  header?: any
  theme?: DeepPartial<UnikTheme>
}

const _Global = createGlobalStyle`
  ${normalize()}

  * {
    box-sizing: border-box;
  }

  body {
    ${({ theme }) =>
      css`
        ${renderFontFamily(theme.base.fontFamily)}
        ${renderFontSize(theme.base.fontSize)}
      `}
    height: 100%;
    width: 100%;
  }
`

export const Unik: React.FC<Props> = ({ children, theme, header }) => {
  return (
    <ThemeProvider theme={merge(themeDefault, theme)}>
      <_Global></_Global>
      <Helmet>{header}</Helmet>
      {children}
    </ThemeProvider>
  )
}
