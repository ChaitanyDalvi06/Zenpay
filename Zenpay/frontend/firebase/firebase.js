// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHsQHPy-0VSjgYesq_rP379bbsvUu5O7Y",
  authDomain: "slice-authh.firebaseapp.com",
  projectId: "slice-authh",
  storageBucket: "slice-authh.firebasestorage.app",
  messagingSenderId: "515298025302",
  appId: "1:515298025302:web:2eb221b94f6922f97100f7",
  measurementId: "G-KB21WRCW6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);