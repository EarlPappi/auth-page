// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXGo8Kgx2aGxj75eEhLRZ5zL3zKgzjSp0",
  authDomain: "fir-auth-a37f1.firebaseapp.com",
  projectId: "fir-auth-a37f1",
  storageBucket: "fir-auth-a37f1.appspot.com",
  messagingSenderId: "1010245077644",
  appId: "1:1010245077644:web:53a1717ac914e08b6749a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// console.log(app);
export const auth = getAuth();

// console.log(db);