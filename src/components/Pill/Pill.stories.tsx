import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Pill, PillProps } from './Pill'

export default {
  title: 'Components/Pill',
  component: Pill
} as Meta

const Template: Story<PillProps> = (args) => <Pill {...args} />

export const Primary = Template.bind({})
