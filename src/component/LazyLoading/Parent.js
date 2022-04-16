import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router , Link , Routes , Route } from 'react-router-dom'
// import Dashboard from './component/Dashboard'
import Home from './component/Home'
// import Profile from './component/Profile'

const Profile = lazy(() => import('./component/Profile'))
const Dashboard = lazy(() => import('./component/Dashboard'))

const Parent = () => {
  return (
    <Router>
        <div>
            <Link to='/' >Home</Link>
            <Link to='/profile' >Profile</Link>
            <Link to='/dashboard' >Dashboard</Link>
        </div>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path='/' element={<Home />}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/dashboard' element={<Dashboard />}/>
                </Routes>
            </Suspense>
    </Router>
  )
}

export default Parent