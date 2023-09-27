
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyASJfqP0ikJQTbJgiZHD-9UzD4T6XN5Uxo",
//   authDomain: "fiberguardbharat-a4465.firebaseapp.com",
//   projectId: "fiberguardbharat-a4465",
//   storageBucket: "fiberguardbharat-a4465.appspot.com",
//   messagingSenderId: "684701619738",
//   appId: "1:684701619738:web:629c3f44cbb7f7ae9d23a3",
//   measurementId: "G-B3R7TMNLXL"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBkYixJAFhi0_wxDGzm4fG57GvMJBp05yQ",
  authDomain: "devbase-396119.firebaseapp.com",
  projectId: "devbase-396119",
  storageBucket: "devbase-396119.appspot.com",
  messagingSenderId: "18350677097",
  appId: "1:18350677097:web:6c3c1828439d35fb9dd6f8",
  measurementId: "G-NK2VD1643X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);