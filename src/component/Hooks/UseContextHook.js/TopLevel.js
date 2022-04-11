import React, { createContext } from 'react'
import Level1 from './Level1'

export const userContext = createContext()
export const channelContext = createContext()

const TopLevel = () => {
  return (
    <div>
        <userContext.Provider value={'Aakash'}>
            <channelContext.Provider value={'aks318'}>
                <Level1 />
            </channelContext.Provider>    
        </userContext.Provider>    
    </div>
  )
}

export default TopLevel