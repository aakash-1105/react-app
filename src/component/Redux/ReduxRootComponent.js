import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import YourAge from './Component/YourAge'
import YourAgeWithHook from './Component/YourAgeWithHook'

const ReduxRootComponent = () => {
  return (
    <Provider store={store}>
        <div><YourAge /></div>
        <div><YourAgeWithHook /></div>
    </Provider>  
  )
}

export default ReduxRootComponent