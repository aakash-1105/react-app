import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import YourAge from './Component/YourAge'

const ReduxRootComponent = () => {
  return (
    <Provider store={store}>
        <div><YourAge /></div>
    </Provider>  
  )
}

export default ReduxRootComponent