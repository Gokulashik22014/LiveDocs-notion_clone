'use client'
import CustomRoomProvider from '@/components/CustomRoomProvider'
import React from 'react'

const PageLayout = ({children,params:{id}}:{children:React.ReactNode,params:{id:string}}) => {
  return (
    <CustomRoomProvider roomId={id}>{children}</CustomRoomProvider>
  )
}

export default PageLayout