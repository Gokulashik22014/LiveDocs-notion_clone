import { Button } from '@/components/ui/button'
import React from 'react'
import { BiLeftArrowCircle } from "react-icons/bi";
const Main = () => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg shadow-md flex-1 min-h-screen'>
  <div className='flex items-center space-x-2'>
    <BiLeftArrowCircle className='text-3xl text-blue-600'/>
    <h1 className='text-xl font-semibold text-gray-800'>Start your journey with a new document</h1>
  </div>

  <h2 className='text-lg text-gray-600 mt-2'>Welcome to live blocks</h2>

  <div className='mt-6'>
    <p className='text-gray-700'>
      Live Blocks allows you to collaborate in real-time on documents with your team. Create, edit, and share effortlessly. 
    </p>
    <ul className='list-disc list-inside mt-4'>
      <li>Real-time editing</li>
      <li>Seamless document sharing</li>
      <li>Version control</li>
    </ul>
  </div>
</div>

  )
}

export default Main