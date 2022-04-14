import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import YourAge from './Component/YourAge'
import YourAgeWithHook from './Component/YourAgeWithHook'
import YourMoney from './Component/YourMoney'

const ReduxRootComponent = () => {
  return (
    <Provider store={store}>
        <div><YourAge /></div>
        <div><YourAgeWithHook /></div>
        <div><YourMoney /></div>
    </Provider>  
  )
}

export default ReduxRootComponent