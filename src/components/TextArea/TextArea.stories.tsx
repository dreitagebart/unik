import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { TextArea, TextAreaProps } from './TextArea'
import { Unik } from '../Unik'

export default {
  title: 'Components/TextArea',
  component: TextArea
} as Meta

const Template: Story<TextAreaProps> = (args) => {
  const [state, setState] = useState('')

  return (
    <Unik>
      <TextArea
        {...args}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </Unik>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'Hi there'
}
