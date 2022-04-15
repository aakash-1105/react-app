import React, { useRef } from 'react'
import FRChild from './FRChild'

const FRParent = () => {
    const inputRef = useRef()
  return (
    <div>
        <FRChild ref={inputRef}/>
    </div>
  )
}

export default FRParent