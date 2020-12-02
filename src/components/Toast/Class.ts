import { ErrorType } from '../../types'
import { AddToastMessage, CreateToastMessage, ToastMessage } from './types'

export class Toast {
  private manual: boolean
  public active: boolean
  public id: string
  public timeout: number
  public message: string | React.ReactNode
  public type: ErrorType

  public static createId(): string {
    return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10)
  }

  public static createToast({ message, type = 'info' }: CreateToastMessage) {
    return new Toast({ timeout: 0, message, type, active: false, manual: true })
  }

  public static addToast({
    message,
    type = 'info',
    timeout = 5000
  }: AddToastMessage) {
    return new Toast({ timeout, message, type, active: true, manual: false })
  }

  private constructor({
    timeout = 4000,
    message,
    type = 'info',
    active,
    manual
  }: ToastMessage) {
    this.manual = manual
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

  public isManual(): boolean {
    return this.manual
  }
}
