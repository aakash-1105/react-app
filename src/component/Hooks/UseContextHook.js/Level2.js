import React, { useContext } from 'react'
import { userContext , channelContext } from './TopLevel'

const Level2 = () => {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>{user}-{channel}</div>
  )
}

export default Level2