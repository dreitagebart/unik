import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Box, BoxProps } from './Box'

export default {
  title: 'Components/Box',
  component: Box
} as Meta

const Template: Story<BoxProps> = (args) => <Box {...args} />

export const Primary = Template.bind({})
