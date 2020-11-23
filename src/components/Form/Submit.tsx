import React from 'react'

import { Button, ButtonProps } from '../Button'

interface Props extends ButtonProps {}

export const Submit: React.FC<Props> = ({ type, primary, ...rest }) => {
  return <Button type="submit" primary={primary} {...rest}></Button>
}
