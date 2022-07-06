import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB2K0FbZ2u59Aq-67uSdsy2bUI5wHnoRGo",
    authDomain: "auth-practice-8215e.firebaseapp.com",
    projectId: "auth-practice-8215e",
    storageBucket: "auth-practice-8215e.appspot.com",
    messagingSenderId: "237753519618",
    appId: "1:237753519618:web:80143bae29d2d10786611b",
    measurementId: "G-CP2SPJRD8Y"
  };
  
  const app=initializeApp(firebaseConfig)

  export const auth=getAuth(app)