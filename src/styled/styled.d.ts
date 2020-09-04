import 'styled-components'
import { UnikTheme } from '../types'

declare module 'styled-components' {
  export interface DefaultTheme extends UnikTheme {}
}
