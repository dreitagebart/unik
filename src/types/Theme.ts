import {
  ButtonTheme,
  AvatarTheme,
  CardTheme,
  SelectionTheme,
  ModalTheme,
  LabelTheme,
  TableTheme,
  TextInputTheme,
  CheckboxTheme,
  RadiobuttonTheme,
  HeadingTheme,
  BreadcrumbTheme,
  MessageTheme,
  BaseTheme
} from '../components'
import { ShadowProp } from './Props'
import { DrawerTheme } from '../components/Drawer'

export interface Breakpoint {
  small: number
  medium: number
  large: number
  extraLarge: number
}

interface ShadowTheme {
  [name: string]: ShadowProp
}

export interface UnikTheme {
  breakpoints: Breakpoint
  breadcrumb: BreadcrumbTheme
  button: ButtonTheme
  avatar: AvatarTheme
  drawer: DrawerTheme
  checkbox: CheckboxTheme
  modal: ModalTheme
  card: CardTheme
  selection: SelectionTheme
  label: LabelTheme
  table: TableTheme
  textinput: TextInputTheme
  radiobutton: RadiobuttonTheme
  heading: HeadingTheme
  shadows: ShadowTheme
  message: MessageTheme
  base: BaseTheme
}
