// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCijnI6CBsmFUFwbRmSCuoPuvXKq0AfhAI",
    authDomain: "task-7p-284b5.firebaseapp.com",
    projectId: "task-7p-284b5",
    storageBucket: "task-7p-284b5.appspot.com",
    messagingSenderId: "206964532051",
    appId: "1:206964532051:web:fa344ff397e4a2baca37a6",
    measurementId: "G-JH5MFBTEML"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;