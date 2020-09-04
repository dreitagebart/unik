import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Dropdown, DropdownProps } from './Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown
} as Meta

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const Primary = Template.bind({})
