import React from 'react'
import HOC from './HOC'

const ClickCounter = ({count , incrementCount}) => {
  return (
    <div>
        <button onClick={incrementCount}>
            clicked {count} times
        </button>
    </div>
  )
}

export default HOC(ClickCounter)