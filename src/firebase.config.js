// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTV3aAWzo200n-bFvthCPpgm47yHG4OWM",
  authDomain: "otp-project-eee83.firebaseapp.com",
  projectId: "otp-project-eee83",
  storageBucket: "otp-project-eee83.appspot.com",
  messagingSenderId: "330195653966",
  appId: "1:330195653966:web:cc63816551773bad12ba1f",
  measurementId: "G-6PDSKF9GGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
