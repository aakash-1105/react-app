import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ageDown, ageUp, resetAge } from '../AgeReducer/AgeAction'

const YourAgeWithHook = () => {
    const age = useSelector(state => state.age)
    const dispatch = useDispatch()
  return (
    <div>
        <h4>Hook Age : {age}</h4>
        <button onClick = {() =>dispatch(ageUp())}>Age Up</button>
        <button onClick={() =>dispatch(ageDown())}>Age Down</button>
        <button onClick={() =>dispatch(resetAge())}>Age Reset</button>
    </div>
  )
}

export default YourAgeWithHook