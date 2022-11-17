// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDxkN3H0BGDH9s0_b_fCp9JxV31hgTJ8W0",
  authDomain: "pweb1-c7a43.firebaseapp.com",
  projectId: "pweb1-c7a43",
  storageBucket: "pweb1-c7a43.appspot.com",
  messagingSenderId: "37826317475",
  appId: "1:37826317475:web:26d50af0d91c166c104316",
  measurementId: "G-VY2E0G26DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);