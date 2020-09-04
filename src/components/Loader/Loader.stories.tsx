import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Loader, LoaderProps } from './Loader'

export default {
  title: 'Components/Loader',
  component: Loader
} as Meta

const Template: Story<LoaderProps> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
