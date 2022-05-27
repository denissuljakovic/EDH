import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
  
var firebaseConfig = {
    apiKey: "AIzaSyCElcVPkUp8rji4oBFdWtcYcH55zxkA85M",
    authDomain: "seproject-48a28.firebaseapp.com",
    projectId: "seproject-48a28",
    storageBucket: "seproject-48a28.appspot.com",
    messagingSenderId: "581723729600",
    appId: "1:581723729600:web:6929c41276a66aae6a0725",
    measurementId: "G-KYL4DEVZSE"
  };
    
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  
export default db;