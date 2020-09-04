import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Tooltip, TooltipProps } from './Tooltip'
import { Unik } from '../Unik'

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as Meta

const Template: Story<TooltipProps> = (args) => (
  <Unik>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Tooltip {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'hi there',
  content: (
    <span>
      nothing is <strong>impossible</strong>
    </span>
  ),
  children: 'Hallo du Gemüse'
}
