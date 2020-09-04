import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Toast, ToastProps } from './Toast'

export default {
  title: 'Components/Toast',
  component: Toast
} as Meta

const Template: Story<ToastProps> = (args) => <Toast {...args} />

export const Primary = Template.bind({})
