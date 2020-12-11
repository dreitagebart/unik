import { ErrorType, WidthProp } from '../../types'
import { Position } from './Provider'
import { AddToastMessage, ToastMessage } from './types'

export class Toast {
  public width: WidthProp
  public active: boolean
  public id: string
  public timeout: number
  public message: string | React.ReactNode
  public type: ErrorType

  public static createId(): string {
    return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10)
  }

  public static addToast({
    message,
    type = 'info',
    timeout = 5000,
    width = 200
  }: AddToastMessage) {
    return new Toast({ timeout, message, type, active: true, width })
  }

  private constructor({
    timeout = 4000,
    message,
    type = 'info',
    active,
    width
  }: ToastMessage) {
    this.width = width
    this.active = active
    this.id = Toast.createId()
    this.timeout = timeout
    this.message = message
    this.type = type
  }

  public show() {
    this.active = true
  }

  public remove() {
    this.active = false
  }
}
