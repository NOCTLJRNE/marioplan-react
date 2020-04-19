import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAxM6O9R5awDgJK9pF0WaD43uDlQmPtvcU",
  authDomain: "react-redux-firebase-b2144.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-b2144.firebaseio.com",
  projectId: "react-redux-firebase-b2144",
  storageBucket: "react-redux-firebase-b2144.appspot.com",
  messagingSenderId: "288232662118",
  appId: "1:288232662118:web:1aa1d6c9a9334f3fef79a7",
  measurementId: "G-TSYCS7TNJ8"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
export var db = firebase.firestore(app);
export default firebase;
