import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)


  return (
    <div className='box'>
    <h1>Counter App</h1>
    <h2>{count}</h2>
    <button className='btn1' onClick={() => setCount(count + 1)}>Increment</button>
    <button className='btn2' onClick={() => setCount(0)}>Reset</button>
    <button className='btn3' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App