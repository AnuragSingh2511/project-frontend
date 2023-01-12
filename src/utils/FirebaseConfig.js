// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH6wssyHtrYVTYqnNeJauCWpIoVGD9DJ0",
  authDomain: "chat-app-5f796.firebaseapp.com",
  projectId: "chat-app-5f796",
  storageBucket: "chat-app-5f796.appspot.com",
  messagingSenderId: "1090252146330",
  appId: "1:1090252146330:web:ce3b2d4d0b6560c4450123",
  measurementId: "G-HVHQ0QZP46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseauth = getAuth(app);
