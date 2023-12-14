import React, { useState } from 'react'
import { connect } from 'react-redux'
import { add, sub } from './action'

const Calculator = (props) => {
    const [data , setData] = useState(0)
  return (
      <>
        <input type="number" onChange={(e) => setData(e.target.value)} />
        <div>Calculator : {props.calculatedDate}</div>
        <button onClick={() =>props.add(data)}>Add</button>
        <button onClick={() =>props.sub(data)}>Sub</button>
      </>
  )
}

const mapStateToProps = state => {
    return{
        calculatedDate : state.calculator.calculatedDate
    }
}

const mapDispatchToProps = dispatch => {
    return{
        add : (data) => dispatch(add(data)),
        sub : (data) => dispatch(sub(data))
    }
} 
export default connect(mapStateToProps , mapDispatchToProps)(Calculator)