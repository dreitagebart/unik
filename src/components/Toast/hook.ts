import { useContext } from 'react'

import { ToastContext } from './Context'

export const useToast = () => {
  const { addToast, removeToast, createToast } = useContext(ToastContext)

  return { addToast, removeToast, createToast }
}
