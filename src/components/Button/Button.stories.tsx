import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './Button'
import { Unik } from '../Unik'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Unik>
    <Button {...args} />
  </Unik>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Who is your god now?',
  primary: false
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Who is your god now?',
  primary: true
}
