import React from 'react'

import { WidthProp } from '../../types'
import { _TextInput, _Wrapper } from './Styled'

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width'> {
  width?: WidthProp
  plain?: boolean
}

export const TextInput: React.FC<TextInputProps> = ({
  width = '100%',
  plain = false,
  ...rest
}) => {
  return (
    <_Wrapper width={width}>
      <_TextInput type="text" plain={plain} {...rest}></_TextInput>
    </_Wrapper>
  )
}

TextInput.displayName = 'TextInput'
