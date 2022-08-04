// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNsoePUgxvTxEnzTxcXrj4oQ8z3f7468U",
  authDomain: "pair-98-dts-mini-project.firebaseapp.com",
  projectId: "pair-98-dts-mini-project",
  storageBucket: "pair-98-dts-mini-project.appspot.com",
  messagingSenderId: "1035404162701",
  appId: "1:1035404162701:web:804b1a9b60cb5f691f94c4",
  measurementId: "G-MQBK3FQ21Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};