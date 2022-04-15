import React from 'react'

const FRChild = React.forwardRef(({type} , inputRef) => {
    return (
      <div>
          <input type={type} ref={inputRef}></input>
          <button onClick={() =>inputRef.current.focus()}>Make focus</button>
      </div>
    )
    }
) 

export default FRChild