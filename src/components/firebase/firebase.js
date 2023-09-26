
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASJfqP0ikJQTbJgiZHD-9UzD4T6XN5Uxo",
  authDomain: "fiberguardbharat-a4465.firebaseapp.com",
  projectId: "fiberguardbharat-a4465",
  storageBucket: "fiberguardbharat-a4465.appspot.com",
  messagingSenderId: "684701619738",
  appId: "1:684701619738:web:629c3f44cbb7f7ae9d23a3",
  measurementId: "G-B3R7TMNLXL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);