// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1pYZO-sgMJnZgr--xbHuA7JsM7VVE-I0",
  authDomain: "netflixgpt-b668d.firebaseapp.com",
  projectId: "netflixgpt-b668d",
  storageBucket: "netflixgpt-b668d.firebasestorage.app",
  messagingSenderId: "342760565884",
  appId: "1:342760565884:web:934481f7fbd2366f81edf9",
  measurementId: "G-BC0WJBNQFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();