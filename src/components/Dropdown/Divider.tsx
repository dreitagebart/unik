import React from 'react'

export interface DividerProps {}

export const Divider: React.FC<DividerProps> = ({ children }) => {
  return <div>{children}</div>
}
