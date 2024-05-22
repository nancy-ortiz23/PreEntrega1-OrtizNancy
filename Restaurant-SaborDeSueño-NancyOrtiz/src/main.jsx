import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDojzmlH2p5xpuZfi5kQKMD4BE1JxC1EFI",
  authDomain: "restourant-ecommerce.firebaseapp.com",
  projectId: "restourant-ecommerce",
  storageBucket: "restourant-ecommerce.appspot.com",
  messagingSenderId: "353800926999",
  appId: "1:353800926999:web:7b6c4db3fc6069ed29a952"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)