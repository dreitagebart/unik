import { CSSProperties } from 'react'

export interface RootComponent {
  id?: string
  className?: string
  style?: CSSProperties
}

export interface KeyValue {
  key: string
  value: string
}
