import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'
import styled from 'styled-components'
import { RootComponent } from '../../types'
import 'prismjs/themes/prism-coy.css'

export interface CodeEditorProps extends RootComponent {
  language: string
  code: string
  onChange: (code: string) => void
}

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  background-color: hsl(212, 35%, 95%);
  margin: 1em 0;
`

const Input = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: 0;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 0.8rem;
  background: transparent;
  white-space: pre-wrap;
  line-height: 1.5em;
  word-wrap: break-word;
  font-size: 1rem;

  opacity: 1;
  margin: 0;
  color: hsl(0, 0%, 40%);
  resize: none;
`

const Output = styled.pre`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: 0;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 0.8rem;
  background: transparent;
  white-space: pre-wrap;
  line-height: 1.5em;
  word-wrap: break-word;
  font-size: 1rem;

  pointer-events: none;
  z-index: 3;
  margin: 0;
  overflow-y: auto;
`

const Code = styled.code`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 1rem;
  display: block;
  color: hsl(0, 0%, 40%);
  font-size: 0.8rem;
  font-family: 'PT Mono', monospace;
`

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  language,
  onChange
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    let value = code
    const selStartPos = event.currentTarget.selectionStart!

    console.log(event.currentTarget)

    if (event.key === 'Tab') {
      value =
        value.substring(0, selStartPos) +
        '  ' +
        value.substring(selStartPos, value.length)

      event.currentTarget.selectionStart = selStartPos + 3
      event.currentTarget.selectionEnd = selStartPos + 4
      event.preventDefault()

      onChange(value)
    }
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  useEffect(() => {
    Prism.highlightAll()
  }, [language, code])

  return (
    <Wrapper>
      <Input
        value={code}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Output>
        <Code className={`language-${language}`}>{code}</Code>
      </Output>
    </Wrapper>
  )
}
