import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzXGoGH5RvvcAqdnW-QJkNevodBTxR96E",
  authDomain: "cesarproyecto-fef7f.firebaseapp.com",
  projectId: "cesarproyecto-fef7f",
  storageBucket: "cesarproyecto-fef7f.appspot.com",
  messagingSenderId: "949272505595",
  appId: "1:949272505595:web:4ac9e959c56cb23ccc145e"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
