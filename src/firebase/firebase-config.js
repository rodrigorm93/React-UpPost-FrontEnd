import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU0BMvQdQRnYr4c5yK-defmq1238hBJx8",
  authDomain: "postedon-app.firebaseapp.com",
  databaseURL: "https://postedon-app.firebaseio.com",
  projectId: "postedon-app",
  storageBucket: "postedon-app.appspot.com",
  messagingSenderId: "46859479622",
  appId: "1:46859479622:web:f24e563e6506d3f2c5b847",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); //base de datos
//para la autentificacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
