import { initializeApp,getApp,getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDtREreEDw7nm-5pNzBDaot_c6BrelKrrQ",
  authDomain: "foodzone-a9935.firebaseapp.com",
  projectId: "foodzone-a9935",
  storageBucket: "foodzone-a9935.appspot.com",
  messagingSenderId: "672112650873",
  appId: "1:672112650873:web:4aecce04c469728bcbc2a8"
};

// Initialize Firebase
const app =getApps().length===0? initializeApp(firebaseConfig):getApp();
export const db=getFirestore(app)

