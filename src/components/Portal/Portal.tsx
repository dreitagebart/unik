import React from 'react'
import { createPortal } from 'react-dom'

import { usePortal } from '../../hooks'

export interface PortalProps {
  id?: string
}

export const Portal: React.FC<PortalProps> = ({ children, id }) => {
  const target = usePortal(id)

  return createPortal(children, target)
}
