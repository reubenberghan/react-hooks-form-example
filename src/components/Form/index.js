import * as React from 'react'
import { useReducer } from 'react'

const NAME_CHANGED = 'NAME_CHANGED'
const EMAIL_CHANGED = 'EMAIL_CHANGED'
const initialState = {
  name: '',
  email: ''
}

function formReducer (state, { type, payload }) {
  switch (type) {
    case NAME_CHANGED:
      return {
        ...state,
        name: payload.value
      }
    case EMAIL_CHANGED:
      return {
        ...state,
        email: payload.value
      }
    default:
      return state
  }
}

export default function Form () {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { name, email } = state

  function makeHandleOnChange (type) {
    return function handleOnChange (e) {
      const { value } = e.target

      return dispatch({ type, payload: { value } })
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor='name'>
        Name:
        <input
          type='text'
          onChange={makeHandleOnChange(NAME_CHANGED)}
          value={name}
        />
      </label>
      <label htmlFor='email'>
        Email:
        <input
          type='email'
          onChange={makeHandleOnChange(EMAIL_CHANGED)}
          value={email}
        />
      </label>
    </form>
  )
}
