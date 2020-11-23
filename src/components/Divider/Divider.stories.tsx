import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Divider, DividerProps } from './Divider'
import { Unik } from '../Unik'
import { Icon } from '../Icon'

export default {
  title: 'Components/Divider',
  component: Divider
} as Meta

const Template: Story<DividerProps> = (args) => (
  <Unik>
    <Divider {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'I am a divider'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: <Icon name="donate-blood"></Icon>
}

export const Left = Template.bind({})
Left.args = {
  orientation: 'left',
  children: <Icon name="donate-blood"></Icon>
}

export const Right = Template.bind({})
Right.args = {
  orientation: 'right',
  children: <Icon name="donate-blood"></Icon>
}
