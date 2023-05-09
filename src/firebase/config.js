// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2AKXDFt31uUFxx31OJp4mb4Gv1RUQNB8",
  authDomain: "fir-project-8a9eb.firebaseapp.com",
  projectId: "fir-project-8a9eb",
  storageBucket: "fir-project-8a9eb.appspot.com",
  messagingSenderId: "230378738761",
  appId: "1:230378738761:web:b0dc3f632206b157769b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {auth}