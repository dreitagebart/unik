import { ErrorType, WidthProp } from '../../types'

export interface CreateToastMessage {
  message: string | React.ReactNode
  type?: ErrorType
}

export interface AddToastMessage {
  message: string | React.ReactNode
  timeout?: number
  type?: ErrorType
  width?: WidthProp
}

export interface ToastMessage {
  width: WidthProp
  active: boolean
  message: string | React.ReactNode
  timeout: number
  type: ErrorType
}
