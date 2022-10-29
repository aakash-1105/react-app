import React, { useState } from 'react'

const CoditasCounter = () => {
    const [counter , setCounter] = useState(0)
    const decrement = () => {
        setCounter((counter) => counter - 1)
        setCounter((counter) => counter - 1)
    }
  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incre</button>
        <p>{counter}</p>
        <button onClick={() =>decrement()}>Decre</button>
    </div>
  )
}

export default CoditasCounter