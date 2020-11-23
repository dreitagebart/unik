import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Slider, SliderProps } from './Slider'
import { Unik } from '../Unik'

export default {
  title: 'Components/Slider',
  component: Slider
} as Meta

interface SliderObject {
  value: number
  min: number
  max: number
}

interface ParentProps {
  children: (
    state: SliderObject,
    setState: React.Dispatch<React.SetStateAction<SliderObject>>
  ) => any
}

const Template: Story<SliderProps> = (args) => {
  const Parent: React.FC<ParentProps> = ({ children, ...props }) => {
    const [state, setState] = useState({ value: 20, min: 1, max: 100 })

    return children(state, setState)
  }

  return (
    <Unik>
      <Parent>
        {(state, setState) => (
          <Slider
            {...state}
            onChange={(e) =>
              setState({ ...state, value: Number(e.target.value) })
            }
          />
        )}
      </Parent>
    </Unik>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
