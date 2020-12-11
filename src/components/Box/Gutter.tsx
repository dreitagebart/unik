import React from 'react'

import { GutterProp, DirectionProp } from '../../types'
import { _Gutter } from './Styled'

interface Props {
  gutter: GutterProp
  direction: DirectionProp
}

export const Gutter: React.FC<Props> = ({ gutter, direction }) => {
  return <_Gutter gutter={gutter} direction={direction}></_Gutter>
}
