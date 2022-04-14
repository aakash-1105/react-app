import React from 'react'
import { connect } from 'react-redux'
import { ageDown, ageUp, resetAge } from '../AgeReducer/AgeAction'

const YourAge = (props) => {
  return (
    <div>
        <h4>Your Age : {props.age}</h4>
        <button onClick={props.ageUp}>Age Up</button>
        <button onClick={props.ageDown}>Age Down</button>
        <button onClick={props.resetAge}>Reset age</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    age : state.age
  }
}

const mapDispatchToProps = dispatch => {
  return{
    ageUp : () => dispatch(ageUp()),
    ageDown : () => dispatch(ageDown()),
    resetAge : () => dispatch(resetAge())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(YourAge)