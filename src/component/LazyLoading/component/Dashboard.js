// Imagine This folder is using heavy package , which will cause initial load of application.
// We can use Lazy load to load this component when we actually need

import React from 'react'


const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard