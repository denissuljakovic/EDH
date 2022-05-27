
import { initializeApp } from "firebase/app";
import { Link, useHistory } from "react-router-dom";
import 'firebase/auth';
import "firebase/firestore";
import {functions} from 'react'

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  //sendPasswordResetEmail,
  //signOut,
} from "firebase/auth";
import "firebase/firestore";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCElcVPkUp8rji4oBFdWtcYcH55zxkA85M",
    authDomain: "seproject-48a28.firebaseapp.com",
    projectId: "seproject-48a28",
    storageBucket: "seproject-48a28.appspot.com",
    messagingSenderId: "581723729600",
    appId: "1:581723729600:web:6929c41276a66aae6a0725",
    measurementId: "G-KYL4DEVZSE"
  };
  const app=initializeApp(firebaseConfig);

//functions.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.name,
        authProvider: "google",
        email: user.email,
        dob: user.dob,
        phone: user.phone,
        country: user.country,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    
    <Link to="/login">alert(err.message);</Link> 
  }
};
const registerWithEmailAndPassword = async (name, email, password, country, phone, dob) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      country,
      phone,
      dob
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


{/**const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}; const logout = () => {
  
  <Link to="/login">signOut(auth); </Link> 
};



const provider = new functions.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};


*/}
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  //sendPasswordReset,
 // logout,
};
