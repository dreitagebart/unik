import { createContext } from 'react'

interface SelectionContext {
  select: boolean
  multi: boolean
  keyProp: string
  hideSelected: boolean
  onSelect: (item: any) => void
  selected: Array<string>
  setSelected: React.Dispatch<React.SetStateAction<Array<string>>>
}

export const Context = createContext<SelectionContext>({
  select: false,
  hideSelected: false,
  multi: false,
  onSelect: () => null,
  selected: [],
  setSelected: () => null,
  keyProp: ''
})

export const { Provider } = Context
