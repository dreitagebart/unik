import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Dropdown, DropdownProps } from './Dropdown'
import { Unik } from '../Unik'

export default {
  title: 'Components/Dropdown',
  component: Dropdown
} as Meta

const Template: Story<DropdownProps> = (args) => (
  <Unik>
    <Dropdown {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Click me'
}
