import React, { useState } from 'react'
import Child from './Child'

const ParentCallBack = () => {
    const [counter , setCounter] = useState(0)
    const handleCounter = (value) => {
        setCounter(prevCount => prevCount + parseInt(value))
    }
  return (
      <>
        Counter : {counter}
        <Child 
            onSubmit = {(value) => handleCounter(value)}
        />
      </>
  )
}

export default ParentCallBack