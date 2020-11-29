import React from 'react'
import {
  DefaultTheme,
  ThemeProvider,
  useTheme,
  ThemeContext
} from 'styled-components'
import merge from 'lodash.merge'

import { DeepPartial } from '../../types'

interface Props {
  theme: DeepPartial<DefaultTheme>
}

export const Theme: React.FC<Props> = ({ children, theme: customTheme }) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <ThemeContext.Provider value={merge(theme, customTheme)}>
          {children}
        </ThemeContext.Provider>
      )}
    </ThemeContext.Consumer>
  )
}
