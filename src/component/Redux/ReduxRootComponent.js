import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import YourAge from './Component/YourAge'
import YourAgeWithHook from './Component/YourAgeWithHook'
import YourMoney from './Component/YourMoney'
import Calculator from './CalculatorRedux/Calculator'

const ReduxRootComponent = () => {
  return (
    <Provider store={store}>
        <div><YourAge /></div>
        <div><YourAgeWithHook /></div>
        <div><YourMoney /></div>
        <div><Calculator /></div>
    </Provider>  
  )
}

export default ReduxRootComponent