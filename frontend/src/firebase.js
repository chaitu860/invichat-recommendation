// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACsbQ8MrYcuDt2xeKhPbs9oPg35OZeFBk",
  authDomain: "invichat-user-auth.firebaseapp.com",
  projectId: "invichat-user-auth",
  storageBucket: "invichat-user-auth.appspot.com",
  messagingSenderId: "223087383302",
  appId: "1:223087383302:web:43a7c0362a08ae71260487",
  measurementId: "G-FP8PR1LKD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;