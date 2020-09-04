import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Label, LabelProps } from './Label'

export default {
  title: 'Components/Label',
  component: Label
} as Meta

const Template: Story<LabelProps> = (args) => <Label {...args} />

export const Primary = Template.bind({})
