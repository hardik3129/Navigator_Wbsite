// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDQXDQ11FU6h5i9YMNyJX3q3Q7BfCfFIHo",
  authDomain: "hospital-website-5840b.firebaseapp.com",
  projectId: "hospital-website-5840b",
  storageBucket: "hospital-website-5840b.appspot.com",
  messagingSenderId: "983050557835",
  appId: "1:983050557835:web:d5e107a6f1bf04c97eb78e",
  measurementId: "G-4EN173WCN8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export default app;