import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Image, ImageProps } from './Image'

export default {
  title: 'Components/Image',
  component: Image
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 200,
  source:
    'https://www.naehr-engel.com/media/media/resize/id24337-fw275-fh275-wi275-sc2/f21019_2.jpg'
}
