import * as React from 'react'

import { head, tail } from 'ramda'

import { isNotEmpty } from 'ramda-adjunct'

const { useReducer } = React
const UPDATE = 'UPDATE'
const REDO = 'REDO'
const UNDO = 'UNDO'
const CLEAR = 'CLEAR'
const initialState = {
  value: '',
  undo: [],
  redo: []
}

function reducer (state, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        value: action.value,
        undo: [state.value, ...state.undo]
      }
    case UNDO:
      return {
        ...state,
        undo: tail(state.undo),
        redo: [state.value, ...state.redo],
        value: head(state.undo)
      }
    case REDO:
      return {
        ...state,
        undo: [state.value, ...state.undo],
        redo: tail(state.redo),
        value: head(state.redo)
      }
    case CLEAR:
      return initialState
    default:
      return state
  }
}

export default function useUndoRedo () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = event => dispatch({
    type: UPDATE,
    value: event && event.target ? event.target.value : ''
  })

  const undo = () => dispatch({ type: UNDO })
  const redo = () => dispatch({ type: REDO })
  const clear = () => dispatch({ type: CLEAR })

  return {
    clear,
    undo,
    undoEnabled: isNotEmpty(state.undo),
    redo,
    redoEnabled: isNotEmpty(state.redo),
    onChange,
    value: state.value
  }
}
