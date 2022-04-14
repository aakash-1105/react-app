import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMoney, removeMoney, resetMoney } from '../MoneyReducer/MoneyAction'

const YourMoney = () => {
    const money = useSelector(state => state.yourMoney.money)
    const dispatch = useDispatch()
  return (
    <div>
        <h4>YourMoney : {money}</h4>
        <button onClick={() => dispatch(addMoney())}>Add money</button>
        <button onClick={() => dispatch(removeMoney())}>Add money</button>
        <button onClick={() => dispatch(resetMoney())}>Reset money</button>
    </div>
  )
}

export default YourMoney