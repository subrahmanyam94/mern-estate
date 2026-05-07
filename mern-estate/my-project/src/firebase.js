// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d037e.firebaseapp.com",
  projectId: "mern-estate-d037e",
  storageBucket: "mern-estate-d037e.firebasestorage.app",
  messagingSenderId: "1063207181176",
  appId: "1:1063207181176:web:695412bf09ceabef03868d",
  measurementId: "G-0P59KDXMKP"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
