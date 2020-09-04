import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { CodeEditor, CodeEditorProps } from './CodeEditor'
import { Unik } from '../Unik'

export default {
  title: 'Components/CodeEditor',
  component: CodeEditor
} as Meta

interface ParentProps {
  children: (
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => any
}

const Template: Story<CodeEditorProps> = (args) => {
  const Parent: React.FC<ParentProps> = ({ children, ...props }) => {
    const [state, setState] = useState(`const bevel = "emboss"`)

    return children(state, setState)
  }

  return (
    <Unik>
      <Parent>
        {(state, setState) => (
          <CodeEditor
            language="javascript"
            code={state}
            onChange={(code) => setState(code)}
          />
        )}
      </Parent>
    </Unik>
  )
}

export const Primary = Template.bind({})
