import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count , setCount] = useState(1)
    useEffect(() => setCount(1))  // It will render only once
    console.log("Rendering" , count)
  return (
    <div>UseEffectHook</div>
  )
}

export default UseEffectHook