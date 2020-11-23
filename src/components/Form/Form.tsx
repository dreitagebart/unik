import React from 'react'

import { GroupProps, Group } from './Group'
import { TextInputProps, TextInput } from '../TextInput'
import { CheckboxProps, Checkbox } from '../Checkbox'
import { RadiobuttonProps, Radiobutton } from '../Radiobutton'
import { LabelProps, Label } from '../Label'
import { ButtonProps, Button } from '../Button'
import { TextArea, TextAreaProps } from '../TextArea'
import { Submit } from './Submit'
import { Cancel } from './Cancel'

export interface FormProps {
  children: any
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

interface SubComponents {
  Checkbox: React.FC<CheckboxProps>
  Radiobutton: React.FC<RadiobuttonProps>
  TextInput: React.FC<TextInputProps>
  TextArea: React.FC<TextAreaProps>
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

Form.Group = Group
Form.TextInput = TextInput
Form.Radiobutton = Radiobutton
Form.Checkbox = Checkbox
Form.Label = Label
Form.Submit = Submit
Form.Button = Button
Form.Cancel = Cancel
Form.TextArea = TextArea
