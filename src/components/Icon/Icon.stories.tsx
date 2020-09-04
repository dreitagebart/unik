import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Icon, IconProps } from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'alarm',
  color: '#ff00f7',
  size: 'lg'
}
