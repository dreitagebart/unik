import React from 'react'

import { GroupProps, Group } from './Group'
import { TextInputProps, TextInput } from '../TextInput'
import { CheckboxProps, Checkbox } from '../Checkbox'
import { RadiobuttonProps, Radiobutton } from '../Radiobutton'
import { LabelProps, Label } from '../Label'
import { ButtonProps, Button } from '../Button'

export interface FormProps {
  children: any
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

interface SubComponents {
  Checkbox: React.FC<CheckboxProps>
  Radiobutton: React.FC<RadiobuttonProps>
  TextInput: React.FC<TextInputProps>
  Group: React.FC<GroupProps>
  Label: React.FC<LabelProps>
  Submit: React.FC<ButtonProps>
  Cancel: React.FC<ButtonProps>
  Button: React.FC<ButtonProps>
}

export const Form: React.FC<FormProps> & SubComponents = ({
  children,
  onSubmit
}) => {
  return <form onSubmit={onSubmit}>{children}</form>
}

const Submit = Button
Submit.defaultProps = {
  type: 'submit',
  primary: true
}

const Cancel = Button
Cancel.defaultProps = {
  type: 'reset'
}

Form.Group = Group
Form.TextInput = TextInput
Form.Radiobutton = Radiobutton
Form.Checkbox = Checkbox
Form.Label = Label
Form.Submit = Submit
Form.Button = Button
Form.Cancel = Cancel
