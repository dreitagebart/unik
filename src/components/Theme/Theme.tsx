import React from 'react'
import { DefaultTheme, ThemeProvider, useTheme } from 'styled-components'
import merge from 'lodash.merge'

import { DeepPartial } from '../../types'

interface Props {
  theme: DeepPartial<DefaultTheme>
}

export const Theme: React.FC<Props> = ({ children, theme }) => {
  const defaultTheme = useTheme()

  const newTheme = merge(defaultTheme, theme)

  return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>
}
