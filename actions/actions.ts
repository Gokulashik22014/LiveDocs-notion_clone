'use server'
import { adminDB } from "@/firebase_admin"
import {auth} from "@clerk/nextjs/server"
export const createNewDocument=async()=>{
    //ensures that the user is signed in before creating the new document
    auth().protect()
    const {sessionClaims}=await auth()
    // creating the collection documents
    const docCollRef=await adminDB.collection("documents")

    const docRef=docCollRef.add({
        title:"New Doc"
    })
    //creating the user with the email as uniqueue key and creating the rooms that has the docRef.id(id of the created docs)
    //honestly ! saved the code I dont know how and why
    //so basically the sessionClaims is changed in clerk to adjust to that we create User type and we extend the interface of "sessionClaims" to User in globals.d.ts file 
    //so Yeah!!! your are useless
    await adminDB.collection("users").doc(sessionClaims?.email!).collection("rooms").doc((await docRef).id).set({
        userId:sessionClaims?.email,
        roomId:(await docRef).id,
        role:"owner",
        createdAt:new Date()
    })

    return {docId:(await docRef).id}
}