import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Table, TableProps } from './Table'
import { Unik } from '../Unik'

export default {
  title: 'Components/Table',
  component: Table
} as Meta

const Template: Story<TableProps> = (args) => (
  <Unik>
    <Table {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  cellPadding: 8,
  hover: 'row',
  cellBorder: '1px solid #cfcfcf',
  children: (
    <>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Spargel</Table.HeaderCell>
          <Table.HeaderCell>Blutwurst</Table.HeaderCell>
          <Table.HeaderCell>Klöten</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Hühnerfrikasee mit Spargel</Table.Cell>
          <Table.Cell>Tote Oma mit Bratkartoffeln</Table.Cell>
          <Table.Cell>Tex Mex Bull</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell colSpan={3} align="center">
            Kuhle Sachen kann man damit machen
          </Table.Cell>
        </Table.Row>
      </Table.Foot>
    </>
  )
}
