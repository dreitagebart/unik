import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { TextInput, TextInputProps } from './TextInput'
import { Unik } from '../Unik'

export default {
  title: 'Components/TextInput',
  component: TextInput
} as Meta

const Template: Story<TextInputProps> = (args) => {
  const [state, setState] = useState('')

  return (
    <Unik>
      <TextInput
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
