import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Tree, TreeProps } from './Tree'
import { Unik } from '../Unik'

export default {
  title: 'Components/Tree',
  component: Tree
} as Meta

interface TreeItem {
  key: number
  label: string
  items?: Array<TreeItem>
  expand?: boolean
}

const Template: Story<TreeProps<TreeItem>> = (args) => (
  <Unik>
    <Tree<TreeItem> {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  items: [
    {
      key: 1,
      label: 'Hausmacher',
      items: [
        {
          key: 3,
          label: 'Blutwurst',
          items: [
            {
              key: 4,
              label: 'Knäudele'
            },
            { key: 6, label: 'im Naturdarm' }
          ]
        },
        { key: 35, label: 'Schwartenmagen' },
        { key: 90, label: 'Presssack' }
      ]
    },
    { key: 36, label: 'Brühwurst' }
  ]
}
