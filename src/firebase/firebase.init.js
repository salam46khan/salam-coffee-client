// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcPKPnQUbPrKKnWrrnu8_sUAvCjt191Jk",
  authDomain: "salam-coffee-shop.firebaseapp.com",
  projectId: "salam-coffee-shop",
  storageBucket: "salam-coffee-shop.firebasestorage.app",
  messagingSenderId: "98528084419",
  appId: "1:98528084419:web:2068441cf3b75287dd7d76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()