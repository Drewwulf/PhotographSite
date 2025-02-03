// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // для роботи з авторизацією

// Твої налаштування Firebase
const firebaseConfig = {
  apiKey: "AIzaSyABKdo74S0JdcZOko2c2G2z7RO5no-dM5g",
  authDomain: "photographsite.firebaseapp.com",
  projectId: "photographsite",
  storageBucket: "photographsite.firebasestorage.app",
  messagingSenderId: "320422708593",
  appId: "1:320422708593:web:1be978a4baecdf9f3422d0",
  measurementId: "G-9GK3MFRD7K"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Ініціалізація Firebase Authentication

export { auth };
