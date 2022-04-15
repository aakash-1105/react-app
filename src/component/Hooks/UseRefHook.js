import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    const ref = useRef()
    useEffect(() => {
        ref.current.focus()
    } ,[])
  return (
    <div>
        <input type="text" ref={ref}></input>
    </div>
  )
}

export default UseRefHook