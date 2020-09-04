import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  node?: HTMLElement
}

export const Portal: React.FC<PortalProps> = ({ children, node }) => {
  const element = document.createElement('div')

  useEffect(() => {
    if (!node) document.body.appendChild(element)

    return () => {
      if (!node) document.body.removeChild(element)
    }
  }, [element, node])

  return createPortal(children, node || element)
}
