import * as React from 'react'

import { isEmpty, not } from 'ramda'

import styled from 'styled-components'
import useUndoRedo from '../../hooks/useUndoRedo'

const { useState } = React

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid LightGray;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0.2rem 0 0;
  padding: 0 0.2rem;
  flex: 1;
`

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  width: 5rem;
  text-align: right;
  padding: 0 0.5rem;
`

const Button = styled.button`
  background-color: ${props => props.onClick ? (props.children === 'SHOW' ? 'Crimson' : 'SlateBlue') : 'Gray'};
  border-radius: 5px;
  border: none;
  color: White;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0.2rem 0 0;
  padding: 0 0.5rem;
`

const Field = styled.div`
  display: flex;
  margin: 1rem;
  align-items: stretch;
`

export default function PasswordField (/* props */) {
  const { clear, undo, undoEnabled, redo, redoEnabled, onChange, value } = useUndoRedo()
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(not(show))

  return (
    <Field>
      <Label>Password</Label>
      <Input type={show ? 'text' : 'password'} onChange={onChange} value={value} />
      <Button onClick={toggleShow}>{show ? 'HIDE' : 'SHOW'}</Button>
      {undoEnabled ? <Button onClick={undo}>UNDO</Button> : <Button>UNDO</Button>}
      {redoEnabled ? <Button onClick={redo}>REDO</Button> : <Button>REDO</Button>}
      {isEmpty(value) ? <Button>CLEAR</Button> : <Button onClick={clear}>CLEAR</Button>}
    </Field>
  )
}
