import { ErrorType } from '../../types'

export interface CreateToastMessage {
  message: string | React.ReactNode
  type?: ErrorType
}

export interface AddToastMessage {
  message: string | React.ReactNode
  timeout?: number
  type?: ErrorType
}

export interface ToastMessage {
  manual: boolean
  active: boolean
  message: string | React.ReactNode
  timeout: number
  type: ErrorType
}
