import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Form, FormProps } from './Form'
import { Unik } from '../Unik'

export default {
  title: 'Components/Form',
  component: Form
} as Meta

const Template: Story<FormProps> = (args) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('You submitted')
  }

  return (
    <Unik>
      <Form {...args} onSubmit={handleSubmit}></Form>
    </Unik>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <>
      <Form.Group>
        <Form.Label>
          Your first name
          <Form.TextInput></Form.TextInput>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Your Last name
          <Form.TextInput></Form.TextInput>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Submit>send form</Form.Submit>
        <Form.Cancel>cancel</Form.Cancel>
      </Form.Group>
    </>
  )
}
