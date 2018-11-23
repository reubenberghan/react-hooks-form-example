import 'raf/polyfill'

import * as React from 'react'
import { useState } from 'react'
import { render } from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'

import './index.css'
// import App from './App'
// import * as serviceWorker from './serviceWorker'

function App () {
  const [count, setCount] = useState(0)

  count

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

document.body.innerHTML += `<div id="root"></div>`

render(<App />, document.getElementById('root'))

const button = document.getElementsByTagName('button')[0]

ReactTestUtils.Simulate.click(button)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()
