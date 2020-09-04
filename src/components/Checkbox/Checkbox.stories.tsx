import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Unik } from '../Unik'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta

const Template: Story<CheckboxProps> = (args) => {
  const [state, setState] = useState({ one: false, two: false, three: false })

  return (
    <Unik>
      <Checkbox
        label="Check me"
        checked={state.one}
        onChange={(event) => {
          setState({ ...state, one: event.target.checked })
        }}
      />
      <Checkbox
        label="No, check me"
        checked={state.two}
        onChange={(event) => {
          setState({ ...state, two: event.target.checked })
        }}
      />
      <Checkbox
        label="Forget them, check me!"
        checked={state.three}
        onChange={(event) => {
          setState({ ...state, three: event.target.checked })
        }}
      />
    </Unik>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
