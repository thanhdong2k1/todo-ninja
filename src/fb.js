// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbhqekBahpzRqPSbJtvtnmwBjIgh1DWNw",
  authDomain: "todo-ninja-1108c.firebaseapp.com",
  projectId: "todo-ninja-1108c",
  storageBucket: "todo-ninja-1108c.appspot.com",
  messagingSenderId: "197882102820",
  appId: "1:197882102820:web:c53004877bfcea0f3904b1"
};
firebase.initializeApp(firebaseConfig)
// Initialize Firebase
// const db = firebase(firebaseConfig);

const db= firebase.firestore();

db.settings({ timestampsInSnapshots: true });
export default db;