import React, { useState } from 'react'

const Child = ({onSubmit}) => {
    const [data , setdata] = useState(0)
  return (
    <div>
        <input value={data} onChange={(e) => setdata(e.target.value)} />
        <button onClick={() => onSubmit(data)}>Submit</button>
    </div>
  )
}

export default Child