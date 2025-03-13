// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGGKphF9o9N-0KAJxAVGVNucNMWhPHJ5g",
  authDomain: "webcafelanding-20f9d.firebaseapp.com",
  projectId: "webcafelanding-20f9d",
  storageBucket: "webcafelanding-20f9d.firebasestorage.app",
  messagingSenderId: "1036214201993",
  appId: "1:1036214201993:web:7a7f5cb0f05f86c952e058",
  measurementId: "G-1PVGCT5C8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);