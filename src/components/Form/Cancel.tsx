import React from 'react'

import { Button, ButtonProps } from '../Button'

interface Props extends ButtonProps {}

export const Cancel: React.FC<Props> = ({ type, ...rest }) => {
  return <Button type="reset" {...rest}></Button>
}
