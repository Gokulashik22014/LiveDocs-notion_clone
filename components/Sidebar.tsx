import React from 'react'
import NewDocument from './NewDocument'

const Sidebar = () => {
  return (
    <div className='flex px-4 py-2 bg-slate-300 w-64 justify-center min-h-screen'>
      <NewDocument/>
    </div>
  )
}

export default Sidebar