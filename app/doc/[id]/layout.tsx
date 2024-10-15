'use client'
import CustomRoomProvider from '@/components/CustomRoomProvider'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const PageLayout = ({children,params:{id}}:{children:React.ReactNode,params:{id:string}}) => {
  auth().protect();
  return (
    <CustomRoomProvider roomId={id}>{children}</CustomRoomProvider>
  )
}

export default PageLayout