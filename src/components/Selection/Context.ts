import { createContext } from 'react'

interface SelectionContext {
  multi: boolean
  hideSelected: boolean
  onSelect: (key: string) => void
  selected: Array<string>
  setSelected: React.Dispatch<React.SetStateAction<Array<string>>>
}

export const Context = createContext<SelectionContext>({
  hideSelected: false,
  multi: false,
  onSelect: () => null,
  selected: [],
  setSelected: () => null
})

export const { Provider } = Context
