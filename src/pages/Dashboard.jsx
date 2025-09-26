import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


const Dashboard = () => {
  return (
    <div className='bg-white '>
    <div className='flex bg-white '>
      <Sidebar/>
      <Navbar/>
    </div>
    </div>
  )
}

export default Dashboard