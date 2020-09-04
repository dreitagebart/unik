import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Radiobutton, RadiobuttonProps } from './Radiobutton'
import { Unik } from '../Unik'

export default {
  title: 'Components/Radiobutton',
  component: Radiobutton
} as Meta

const Template: Story<RadiobuttonProps> = (args) => {
  const [state, setState] = useState('')
  console.log(`state is ${state}`)
  return (
    <Unik>
      <Radiobutton
        checked
        label={<span>one</span>}
        group="demo"
        value="one"
        onChange={(event) => setState(event.target.value)}
      />
      <Radiobutton
        label={<span>two</span>}
        group="demo"
        value="two"
        onChange={(event) => setState(event.target.value)}
      />
      <Radiobutton
        group="demo"
        value="three"
        label={<span>three</span>}
        onChange={(event) => setState(event.target.value)}
      />
    </Unik>
  )
}

export const Primary = Template.bind({})
