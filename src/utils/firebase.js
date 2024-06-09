// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2jKRkYkNRB7Pz0wwDyw5WTwgEhM7np7E",
  authDomain: "netflixgptreact-5af54.firebaseapp.com",
  projectId: "netflixgptreact-5af54",
  storageBucket: "netflixgptreact-5af54.appspot.com",
  messagingSenderId: "863699108891",
  appId: "1:863699108891:web:91e2ae431f15571d70e4be",
  measurementId: "G-SZP0MP52Z9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
