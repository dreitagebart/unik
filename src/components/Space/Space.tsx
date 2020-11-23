import React from 'react'

import { _Space } from './Styled'

interface Props {
  size: number
  mode?: 'width' | 'height'
}

export const Space: React.FC<Props> = ({ size, mode = 'width' }) => {
  return <_Space mode={mode} size={size}></_Space>
}
