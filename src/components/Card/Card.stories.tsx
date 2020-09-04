import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Card, CardProps } from './Card'
import { Unik } from '../Unik'

export default {
  title: 'Components/Card',
  component: Card
} as Meta

const Template: Story<CardProps> = (args) => (
  <Unik>
    <Card {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  children: <span>Hi there</span>
}
