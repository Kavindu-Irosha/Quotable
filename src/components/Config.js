// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database";


/*const firebaseConfig = {
  apiKey: "AIzaSyAnL8ip_AK12Ow1bwqdtuR3b6u_i3jCcvQ",
  authDomain: "quotable-80ef0.firebaseapp.com",
  projectId: "quotable-80ef0",
  storageBucket: "quotable-80ef0.appspot.com",
  messagingSenderId: "810390242167",
  appId: "1:810390242167:web:f0e3da9f4d0c9500859772",
  measurementId: "G-R6XMN321K7"
};*/
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAabG-nVdt46t1WI0uVhPcrFI5fkkzzw0c",
  authDomain: "firebirdmobile-87804.firebaseapp.com",
  databaseURL: "https://firebirdmobile-87804-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firebirdmobile-87804",
  storageBucket: "firebirdmobile-87804.appspot.com",
  messagingSenderId: "122394181964",
  appId: "1:122394181964:web:70300f1e93a2ffa4dd0fe9",
  measurementId: "G-8S135YG43Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const DB = getFirestore(app);
const storage = getStorage(app);
const Database = getDatabase(app);

export { Auth, Provider, analytics, DB, storage, Database }