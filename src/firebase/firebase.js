import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbn1plKUq7FwcCNywzYRDHbc0A2kIpLOs",
  authDomain: "triveouslokesh.firebaseapp.com",
  projectId: "triveouslokesh",
  storageBucket: "triveouslokesh.appspot.com",
  messagingSenderId: "534557673290",
  appId: "1:534557673290:web:9453270991e5eeb27ba3b3",
  measurementId: "G-DQ40BC3VLC",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
