import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCsTjK2LjkGFuJ_09I7mRxmTRkK4i0smlg",
    authDomain: "pruebatec-ff67b.firebaseapp.com",
    projectId: "pruebatec-ff67b",
    storageBucket: "pruebatec-ff67b.appspot.com",
    messagingSenderId: "520045802876",
    appId: "1:520045802876:web:4387e17245dfe3cf03e0f9"
};

const facebook = new FacebookAuthProvider();
const app = initializeApp(firebaseConfig);  
const google = new GoogleAuthProvider()
const db = getFirestore()

export {
    app,
    google,
    db,
    facebook
}