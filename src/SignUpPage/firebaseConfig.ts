// Import the functions you need from the SDKs you need



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6W2J5uV5AomprXMVdar4kvMe9reCXHhA",
    authDomain: "fir-auth-97f93.firebaseapp.com",
    projectId: "fir-auth-97f93",
    storageBucket: "fir-auth-97f93.appspot.com",
    messagingSenderId: "245155218930",
    appId: "1:245155218930:web:6eace3237a8436d642176b",
    measurementId: "G-HNEG7PES1S"
};

// Initialize Firebase
const appExample = initializeApp(firebaseConfig);

export const authExample = getAuth(appExample);
