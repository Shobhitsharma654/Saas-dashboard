import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


const DashboardPage = () => {
  return (
    <div className='bg-white '>
    <div className='flex bg-white '>
      <Sidebar/>
      <Navbar/>
    </div>
    </div>
  )
}

export default DashboardPage