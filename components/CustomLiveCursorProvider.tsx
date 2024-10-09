import { useMyPresence, useOthers } from '@liveblocks/react/suspense'
import React, { PointerEvent } from 'react'
import FollowCursor from './FollowCursor'

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
    console.log(others)
  return (
    <div 
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
    >
        {others.filter((other)=>other.presence.cursor!=null).map(({connectionId,presence,info})=>(
            <FollowCursor key={connectionId} x={presence.cursor!.x} y={presence.cursor!.y} info={info}/>
        ))}
        {children}
    </div>
  )
}

export default CustomLiveCursorProvider