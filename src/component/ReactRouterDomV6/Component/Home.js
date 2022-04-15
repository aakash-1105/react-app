import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() =>navigate('/about')}>Its Home , GOTO About</button>
    </div>
  )
}

export default Home