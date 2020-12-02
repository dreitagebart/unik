import React, { useEffect, useState } from 'react'

import { useToast } from './hook'
import { _Toast } from './Styled'
import { Toast } from './Class'

export interface ToastProps {
  toast: Toast
}

export const ToastComponent: React.FC<ToastProps> = ({ toast }) => {
  const [active, setActive] = useState(false)
  const [remove, setRemove] = useState(false)
  const { removeToast } = useToast()

  useEffect(() => {
    if (toast.isManual()) return

    setActive(true)
    toast.remove
  }, [])

  useEffect(() => {
    if (!toast.active) {
      const timer = setTimeout(() => {
        setRemove(true)
      }, toast.timeout)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [toast.active, setRemove])

  useEffect(() => {
    if (remove) {
      const timer = setTimeout(() => {
        removeToast(toast.id)
      }, 500)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [remove, toast.id, removeToast])

  return (
    <_Toast active={active} type={toast.type}>
      {toast.message}
    </_Toast>
  )
}
