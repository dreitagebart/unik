import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'
import { Unik } from '../Unik'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb
} as Meta

const Template: Story<BreadcrumbProps> = (args) => (
  <Unik>
    <Breadcrumb {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  children: [
    <Breadcrumb.Item>Welt</Breadcrumb.Item>,
    <Breadcrumb.Item>Diesel</Breadcrumb.Item>,
    <Breadcrumb.Item>Körnerbrot</Breadcrumb.Item>,
    <Breadcrumb.Item>Knospe</Breadcrumb.Item>
  ]
}
