// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV3XnkwSvHsPGBM_qjgkXfOCAwPTySi38",
  authDomain: "mots-chile.firebaseapp.com",
  projectId: "mots-chile",
  storageBucket: "mots-chile.appspot.com",
  messagingSenderId: "918565541912",
  appId: "1:918565541912:web:6f2b4aab5f6be5e198cb6d"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );

// Initialize auth object
const auth = getAuth( app );

// Initialize firestore object
const db = getFirestore( app );

export { auth, db };