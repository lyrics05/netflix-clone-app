// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
/*  const firebaseConfig = {
  apiKey: `${process.env.REACT_FIREBASE_API_KEY}`,
  authDomain:`${process.env.REACT_FIREBASE_AUTH_DOMAIN}`,
  projectId:`${process.env.REACT_FIREBASE_PROJECT_ID}`,
  storageBucket:`${process.env.REACT_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_FIREBASE_API_KEY_MESAGIN_SENDER}`,
  appId: `${process.env.REACT_FIREBASE_API_KEY_ID}` 
};
console.log(firebaseConfig.apiKey) */

const firebaseConfig = {
  apiKey: "AIzaSyDgt6cudo0u42dKwRBRyR5U5qr0pGMVOJA",
  authDomain: "netflix-clone-app-fd787.firebaseapp.com",
  projectId: "netflix-clone-app-fd787",
  storageBucket: "netflix-clone-app-fd787.appspot.com",
  messagingSenderId: "759740599747",
  appId: "1:759740599747:web:8e75a1da9de562050b8176"
}; 
console.log( process.env.REACT_FIREBASE_API_KEY)


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)