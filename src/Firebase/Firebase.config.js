// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfNOdZgfvaBc16bhQO49vWzgm3ITifJ6M",
  authDomain: "react-dragon-news-auth-8d75c.firebaseapp.com",
  projectId: "react-dragon-news-auth-8d75c",
  storageBucket: "react-dragon-news-auth-8d75c.appspot.com",
  messagingSenderId: "193659833183",
  appId: "1:193659833183:web:710384be3fa53b726304ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;