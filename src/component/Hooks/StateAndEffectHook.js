import React, { useEffect, useState } from 'react'

const StateAndEffectHook = () => {
    const [state1 , setState1] = useState(true)
    const [state2 , setState2] = useState(true)
    console.log("Rendering")
    useEffect(() => {
        setState1(!state1)          // After running all setState method , it will re-render
        setState2(!state1)
    } , [])
    useEffect(() => {
        setState1(!state1)
        setState2(!state1)
    } , [])
  return (
    <div>StateAndEffectHook</div>
  )
}

export default StateAndEffectHook