import React, { useState } from 'react'

const HOC = (OrinalComponent) => {
    
    const NewComonent = () => {
        const [count , setCount] = useState(0)
        const incrementCount = () => {
            setCount(count + 1)
        }
      return (
        <OrinalComponent count={count} incrementCount={incrementCount}/>
      )
    }

  return NewComonent
}

export default HOC