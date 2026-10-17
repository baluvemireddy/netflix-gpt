// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsgke4D_q024BSIC_L6KQxbsCnPL7_wNw",
  authDomain: "netflixgpt-1dc98.firebaseapp.com",
  projectId: "netflixgpt-1dc98",
  storageBucket: "netflixgpt-1dc98.firebasestorage.app",
  messagingSenderId: "18748983837",
  appId: "1:18748983837:web:67e0ca9eeb3d1c0f9f94f4",
  measurementId: "G-GJR91JDNE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);