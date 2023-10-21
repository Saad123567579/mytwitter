// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw9v9kFbvcZnpXJH3nTKDAFIj20J_NPIY",
  authDomain: "twitter-b5801.firebaseapp.com",
  projectId: "twitter-b5801",
  storageBucket: "twitter-b5801.appspot.com",
  messagingSenderId: "288971366763",
  appId: "1:288971366763:web:24e3dd1c5a5246a6daac2e",
  measurementId: "G-L159LTNH05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);