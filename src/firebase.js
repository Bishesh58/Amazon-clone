import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAl01GDE1bVOR10UJfZLb0_dcfFfvQHosw",
  authDomain: "clone-57fec.firebaseapp.com",
  databaseURL: "https://clone-57fec.firebaseio.com",
  projectId: "clone-57fec",
  storageBucket: "clone-57fec.appspot.com",
  messagingSenderId: "93046023097",
  appId: "1:93046023097:web:cb125b61727785e9c14c68",
  measurementId: "G-J10YC0BB2H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};