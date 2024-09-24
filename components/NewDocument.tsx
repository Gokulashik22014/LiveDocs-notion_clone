'use client'
import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { createNewDocument } from '@/actions/actions'
const NewDocument = () => {
  const [isPending, startTransition] = useTransition()
  const router=useRouter()
  const handelCreateDocument=()=>{
    startTransition(async()=>{
      const {docId}=await createNewDocument()
      router.push(`docs/${docId}`)
    })
  }
  return (
    <Button onClick={handelCreateDocument} disabled={isPending}>NewDocument</Button>
  )
}


export default NewDocument