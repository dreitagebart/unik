import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Message, MessageProps } from './Message'
import { Unik } from '../Unik'

export default {
  title: 'Components/Message',
  component: Message
} as Meta

const Template: Story<MessageProps> = (args) => (
  <Unik>
    <Message {...args}>Ich bin eine Nachricht</Message>
  </Unik>
)

export const Default = Template.bind({})
Default.args = {}

export const Success = Template.bind({})
Success.args = {
  success: true
}

export const Error = Template.bind({})
Error.args = {
  error: true
}

export const Warning = Template.bind({})
Warning.args = {
  warning: true
}

export const Info = Template.bind({})
Info.args = {
  info: true
}
