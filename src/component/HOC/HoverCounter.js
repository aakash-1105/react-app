import React from 'react'
import HOC from './HOC'

const HoverCount = ({count , incrementCount}) => {
  return (
    <div>
        <h1 onMouseOver={incrementCount}>
            clicked {count} times
        </h1>
    </div>
  )
}

export default HOC(HoverCount)