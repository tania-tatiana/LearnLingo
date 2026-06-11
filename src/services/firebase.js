// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPpoXPGScb3IAbBJ6gbZ4AJ57h4cuMElU",
  authDomain: "learnlingo-cce63.firebaseapp.com",
  projectId: "learnlingo-cce63",
  storageBucket: "learnlingo-cce63.firebasestorage.app",
  messagingSenderId: "247028844113",
  appId: "1:247028844113:web:dd40853ff65c3e25a9da70",
  measurementId: "G-CFFL7ESVTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);