import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Selection, SelectionProps } from './Selection'
import { Unik } from '../Unik'

export default {
  title: 'Components/Selection',
  component: Selection
} as Meta

interface ParentProps {
  children: (
    state: Array<any>,
    setState: React.Dispatch<React.SetStateAction<Array<any>>>
  ) => any
}

const Template: Story<SelectionProps<any>> = (args) => {
  const Parent: React.FC<ParentProps> = ({ children, ...props }) => {
    const [state, setState] = useState([
      { key: 'hello', label: 'Hallo' },
      { key: 'you', label: 'du' },
      { key: 'are', label: 'bist' },
      { key: 'bloed', label: 'bloed' }
    ])

    return children(state, setState)
  }

  return (
    <Unik>
      <Parent>
        {(state, setState) => <Selection {...args} items={state} />}
      </Parent>
    </Unik>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  selectionWidth: 420,
  hideSelected: true,
  multi: true
  // search: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  selectionWidth: 420,
  hideSelected: false,
  multi: true,
  renderItem: (item) => (
    <div>
      {item.value} {item.description}
    </div>
  )
  // search: true
}
