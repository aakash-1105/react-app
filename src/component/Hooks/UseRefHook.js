import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const ref = useRef()
    const refCount = useRef(0)
    const [count , setCount] = useState(0)

    // useEffect(() => {
    //     ref.current.focus()

    //     const interval = setInterval(() => {
    //         refCount.current = refCount.current + 1
    //         if(refCount.current >= 10) {
    //             clearInterval(interval)
    //         }
    //         setCount(prevCount => prevCount + 1)
    //     } , 1000)

    //     return (() => {
    //         clearInterval(interval)
    //     })
    // } , [])
    // console.log(count)

    useEffect(() => {
        const interval = setInterval(() => {
            refCount.current = refCount.current + 1
        } , 10)
        return (() => clearInterval(interval))
    } , [])
    console.log("re-render")
  return (
    <div>
        <input type="text" ref={ref}></input>
        <h1>Count : {count}</h1>
        <h1>RefCount counting no. of renders : {refCount.current}</h1>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
    </div>
  )
}

export default UseRefHook