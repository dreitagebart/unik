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
  BaseTheme,
  DrawerTheme,
  TreeTheme,
  DividerTheme,
  TextAreaTheme,
  DropdownTheme,
  AlertTheme,
  PillTheme
} from '../components'
import { ShadowProp } from './Props'

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

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
  divider: DividerTheme
  breakpoints: Breakpoint
  breadcrumb: BreadcrumbTheme
  button: ButtonTheme
  avatar: AvatarTheme
  alert: AlertTheme
  dropdown: DropdownTheme
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
  tree: TreeTheme
  textarea: TextAreaTheme
  pill: PillTheme
}
