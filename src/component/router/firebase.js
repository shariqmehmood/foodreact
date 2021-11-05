import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc, collection,addDoc, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBIhz11nu6Yo7F5SKdYqlIW9nTD09CbpOE",
  authDomain: "food-app-react-f9a71.firebaseapp.com",
  projectId: "food-app-react-f9a71",
  storageBucket: "food-app-react-f9a71.appspot.com",
  messagingSenderId: "35333838460",
  appId: "1:35333838460:web:7a5d91b7dc907416031bf9",
  measurementId: "G-78SGVK4J2B"

});

const auth = getAuth();
const db = getFirestore();
export default {
  getStorage
}
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  addDoc,
  ref,
  db,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,

};