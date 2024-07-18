// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkNGUhaDKDl3eyL_h11hUM9Gk3zAyXk6o",
  authDomain: "crowdsourced-recipe-proj.firebaseapp.com",
  projectId: "crowdsourced-recipe-proj",
  storageBucket: "crowdsourced-recipe-proj.appspot.com",
  messagingSenderId: "305023238230",
  appId: "1:305023238230:web:938c08f2f55ed1bea93bf7",
  measurementId: "G-XF19X03NFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);