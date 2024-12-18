// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// Define the type for Firebase config object
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCZLpbM7r6aHaSsp0eQBmF9dKs9aCqVVF0",
  authDomain: "shackwise-staging.firebaseapp.com",
  projectId: "shackwise-staging",
  storageBucket: "shackwise-staging.firebasestorage.app",
  messagingSenderId: "600411675883",
  appId: "1:600411675883:web:a09cd2a8d1a5a29db8b2ae",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);
