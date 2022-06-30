// Import the functions you need from the SDKs you need



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAy0Kv-yUvaJlOLiP-tQVuk_-GS-sx4WA",
    authDomain: "it-life-app.firebaseapp.com",
    projectId: "it-life-app",
    storageBucket: "it-life-app.appspot.com",
    messagingSenderId: "976255144982",
    appId: "1:976255144982:web:301f0b95777d9c449b9137"
};

// Initialize Firebase
const appExample = initializeApp(firebaseConfig);

export const authExample = getAuth(appExample);
