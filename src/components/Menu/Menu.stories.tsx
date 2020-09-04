import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Menu, MenuProps } from './Menu'

export default {
  title: 'Components/Menu',
  component: Menu
} as Meta

const Template: Story<MenuProps> = (args) => <Menu {...args} />

export const Primary = Template.bind({})
