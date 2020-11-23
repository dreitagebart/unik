import React, { useContext } from 'react'

import { Heading, HeadingProps } from '../Heading'
import { Icon } from '../Icon'
import { Context } from './Context'
import { _Close, _Title } from './Styled'

export interface TitleProps extends HeadingProps {}

export const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  const { withoutClose, closeIcon, onClose } = useContext(Context)

  return (
    <_Title>
      <Heading {...props}>{children}</Heading>
      {!withoutClose && (
        <_Close
          onClick={() => {
            if (onClose) onClose()
          }}
        >
          {closeIcon ? closeIcon : <Icon name="x" size={30}></Icon>}
        </_Close>
      )}
    </_Title>
  )
}
