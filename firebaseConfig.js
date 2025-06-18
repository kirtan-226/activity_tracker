// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq1PqlXyT_PBfH6GKuyMSfmNIr6A8SeR8",
  authDomain: "gactivity-87abc.firebaseapp.com",
  databaseURL: "https://gactivity-87abc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gactivity-87abc",
  storageBucket: "gactivity-87abc.firebasestorage.app",
  messagingSenderId: "5116830681",
  appId: "1:5116830681:web:d62f390a170ff547a72fc8",
  measurementId: "G-G5TWZF0GQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);