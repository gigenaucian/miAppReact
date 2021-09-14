import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import { initializeApp } from "@firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpei6HwavYoTmZklzybeKk08zZ1y7JaEE",
  authDomain: "firabase-felitatienda.firebaseapp.com",
  projectId: "firabase-felitatienda",
  storageBucket: "firabase-felitatienda.appspot.com",
  messagingSenderId: "765165754433",
  appId: "1:765165754433:web:07dca57b1465d779c28ec0"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);



