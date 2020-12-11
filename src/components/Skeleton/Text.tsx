import { MarginProp } from '@dreitagebart/box/dist/types'
import React, { useContext } from 'react'

import { HeightProp, WidthProp } from '../../types'
import { Context } from './Context'
import { _Rect } from './Styled'

export interface TextProps {
  margin: MarginProp | Array<MarginProp>
  lines: Array<WidthProp>
  height: HeightProp
  children: any
}

export const Text: React.FC<TextProps> = ({
  children,
  lines,
  height,
  margin
}) => {
  const { loading } = useContext(Context)

  return loading
    ? lines.map((line, index) => {
        return (
          <_Rect
            key={`${line}-${index}`}
            width={line}
            height={height}
            margin={Array.isArray(margin) ? margin[index] : margin}
          ></_Rect>
        )
      })
    : children
}
