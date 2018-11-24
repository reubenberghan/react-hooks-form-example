import * as React from 'react'
import { useState, useEffect } from 'react'

// import { render } from 'react-dom'
// import ReactTestUtils from 'react-dom/test-utils'

export default function Count () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}

// document.body.innerHTML += `<div id="root"></div>`

// render(<App />, document.getElementById('root'))

// const button = document.getElementsByTagName('button')[0]

// ReactTestUtils.Simulate.click(button)
