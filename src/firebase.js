import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2T71xrndmBD32UW2Dl7gerUR2rWXtovg",
  authDomain: "e-commerce-store-eafec.firebaseapp.com",
  databaseURL: "https://e-commerce-store-eafec.firebaseio.com",
  projectId: "e-commerce-store-eafec",
  storageBucket: "e-commerce-store-eafec.appspot.com",
  messagingSenderId: "877610857574",
  appId: "1:877610857574:web:b36b75675534dfeaada9a7",
  measurementId: "G-9HT18Z0651",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
