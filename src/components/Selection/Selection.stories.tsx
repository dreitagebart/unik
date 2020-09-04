import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Selection, SelectionProps, ItemType, ItemTypeArray } from './Selection'
import { Unik } from '../Unik'

export default {
  title: 'Components/Selection',
  component: Selection
} as Meta

interface ParentProps {
  children: (
    state: ItemTypeArray<AdditionalFields>,
    setState: React.Dispatch<
      React.SetStateAction<ItemTypeArray<AdditionalFields>>
    >
  ) => any
}

interface AdditionalFields {
  description: string
}

const Template: Story<SelectionProps<ItemType<AdditionalFields>>> = (args) => {
  const Parent: React.FC<ParentProps> = ({ children, ...props }) => {
    const [state, setState] = useState<ItemTypeArray<AdditionalFields>>([
      {
        key: 'hello',
        value: 'Hallo',
        description: 'hsdlfkjsdlkfj'
      },
      { key: 'you', value: 'du', description: 'lsdkjglkjdg sdf' },
      { key: 'are', value: 'bist', description: 'lsdkjglkjdg sdf' },
      { key: 'bloed', value: 'bloed', description: 'lsdksdfsdf' }
    ])

    return children(state, setState)
  }

  return (
    <Unik>
      <Parent>
        {(state, setState) => (
          <Selection<AdditionalFields> {...args} items={state} />
        )}
      </Parent>
    </Unik>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  width: 420,
  hideSelected: true,
  multi: true
  // search: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  width: 420,
  hideSelected: false,
  multi: true,
  renderItem: (item) => (
    <div>
      {item.value} {item.description}
    </div>
  )
  // search: true
}
