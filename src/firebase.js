// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore,serverTimestamp} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxiwEWXPlTxsdyDZJe3x4GmuBptNFrax8",
  authDomain: "yt-clone-fa029.firebaseapp.com",
  projectId: "yt-clone-fa029",
  storageBucket: "yt-clone-fa029.appspot.com",
  messagingSenderId: "397900877657",
  appId: "1:397900877657:web:76803c0b1fc1d765a08648",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export {app,db,auth,timestamp ,provider}

