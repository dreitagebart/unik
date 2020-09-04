import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { DataTable, DataTableProps } from './DataTable'
import { Unik } from '../Unik'

export default {
  title: 'Components/DataTable',
  component: DataTable
} as Meta

interface SampleData {
  id: string
  name: string
  title: string
}

const Template: Story<DataTableProps<SampleData>> = (args) => (
  <Unik>
    <DataTable {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  cellBorder: '1px solid #cfcfcf',
  hover: 'cell',
  columns: [
    {
      prop: 'id',
      sort: true,
      header: 'Id',
      search: true
    },
    {
      prop: 'name',
      header: 'Name',
      sort: true,
      render: (item) => {
        return `${item.id} - (${item.name})`
      }
    },
    {
      prop: 'title',
      header: 'Title',
      sort: false
    }
  ],
  items: [
    {
      id: 'gerd',
      name: 'Gerd',
      title: 'El Gerdo'
    },
    {
      id: 'fred',
      name: 'Fred',
      title: 'El Fredo'
    },
    {
      id: 'edmund',
      name: 'Edmund',
      title: 'El Edmundo'
    },
    {
      id: 'alfred',
      name: 'Alfred',
      title: 'El Alfredo'
    },
    {
      id: 'sebastian',
      name: 'Sebastian',
      title: 'El Sebastiano'
    }
  ]
}
