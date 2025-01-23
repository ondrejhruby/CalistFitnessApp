// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth here

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC47MLp3bgYB9sep7yjFGxI9jo0DGIqY8c",
    authDomain: "calistfitnessapp.firebaseapp.com",
    projectId: "calistfitnessapp",
    storageBucket: "calistfitnessapp.firebasestorage.app",
    messagingSenderId: "20277636140",
    appId: "1:20277636140:web:1a3734b501c9726114b589"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Pass the 'app' instance to getAuth

export { app, auth }; // Export both 'app' and 'auth'