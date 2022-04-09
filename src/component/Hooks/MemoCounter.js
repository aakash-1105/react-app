import React, { useMemo, useState } from 'react'

const MemoCounter = () => {
    const [count , setCount] = useState(1)
    const [count2 , setCount2] = useState(1)

    const increment = () => setCount(count + 1)
    const increment2 = () => setCount2(count2 + 1)
    const isEven = useMemo(() => {
        let i=0
        while (i<20000){
            console.log(i)
            i++
        }
        return count%2 ===0
    } , [count]) 
    
  return (
    <div>
        <h1>{isEven ? 'Even' : 'Odd'}</h1>
        <h2>Count1 - {count}</h2>
        <button onClick={increment}>Increment</button>
        <h2>Count2 - {count2}</h2>
        <button onClick={increment2}>Increment2</button>
    </div>
  )
}

export default MemoCounter