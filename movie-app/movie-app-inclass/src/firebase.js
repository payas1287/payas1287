// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use



const firebaseConfig = {
  apiKey: "AIzaSyDvHeuo_IwVGMv4C6ib5yY5l8hHAoJTAFQ",
  authDomain: "payas-1164c.firebaseapp.com",
  projectId: "payas-1164c",
  storageBucket: "payas-1164c.appspot.com",
  messagingSenderId: "1075438518806",
  appId: "1:1075438518806:web:796719feb2a5f0d5f06b37",
  measurementId: "G-7GQ4SQ3STZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);