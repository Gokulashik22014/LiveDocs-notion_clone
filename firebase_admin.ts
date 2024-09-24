import { getApps,getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";


let admin = require("firebase-admin");

let serviceAccount = require("./service_admin.json");

if(getApps().length===0){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}else{
  admin=getApp()
}

const adminDB=getFirestore(admin)

export {admin as adminApp,adminDB}