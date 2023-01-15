// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc5jms15XKd_qBG9w7dyX7aWhhQ_NOzGU",
  authDomain: "schedule-ecie-4352.firebaseapp.com",
  projectId: "schedule-ecie-4352",
  storageBucket: "schedule-ecie-4352.appspot.com",
  messagingSenderId: "859264422582",
  appId: "1:859264422582:web:95f1abbb76c46ddad18c17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
