import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyCHcUptbxKDi7dbYRnO_ebI_7WgaXm_Y",
  authDomain: "facebook-messenger-clone-a9d92.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-a9d92.firebaseio.com",
  projectId: "facebook-messenger-clone-a9d92",
  storageBucket: "facebook-messenger-clone-a9d92.appspot.com",
  messagingSenderId: "897008891236",
  appId: "1:897008891236:web:df959fd8b4f29b15daf671",
  measurementId: "G-0R6QJJPRV8",
});

const db = fireBaseApp.firestore();

export default db;
