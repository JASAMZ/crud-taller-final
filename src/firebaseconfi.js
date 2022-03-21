import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUwQuZR3XE5mBiU01Lau3RtVrIGO9s878",
    authDomain: "taller-final-d2108.firebaseapp.com",
    databaseURL: "https://taller-final-d2108.firebaseio.com",
    projectId: "taller-final-d2108",
    storageBucket: "taller-final-d2108.appspot.com",
    messagingSenderId: "989787014237",
    appId: "1:989787014237:web:11c76ddb9f76208d8c39b4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}
