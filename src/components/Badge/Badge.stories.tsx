import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Badge, BadgeProps } from './Badge'
import { Unik } from '../Unik'

export default {
  title: 'Components/Pill',
  component: Badge
} as Meta

const Template: Story<BadgeProps> = (args) => (
  <Unik>
    <Badge {...args} />
  </Unik>
)

export const Primary = Template.bind({})
