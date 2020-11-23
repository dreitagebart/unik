import React from 'react'

export interface TitleProps {}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <div>{children}</div>
}
