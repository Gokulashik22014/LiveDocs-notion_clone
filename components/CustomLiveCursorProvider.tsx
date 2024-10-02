import { useMyPresence, useOthers } from '@liveblocks/react/suspense'
import React, { PointerEvent } from 'react'

const CustomLiveCursorProvider = ({children}:{children:React.ReactNode}) => {
    const [myPresence,updateMyPresence]=useMyPresence()
    const others=useOthers()

    const handlePointerMove=(e:PointerEvent<HTMLDivElement>)=>{
        const cursor={x:Math.floor(e.pageX),y:Math.floor(e.pageY)}
        updateMyPresence({cursor})
    }
    const handlePointerLeave=()=>{
        updateMyPresence({cursor:null})
    }
  return (
    <div 
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
    >
        {children}
    </div>
  )
}

export default CustomLiveCursorProvider