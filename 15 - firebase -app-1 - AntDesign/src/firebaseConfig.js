
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDM2-iQbIlNaokZuYd6ckqiJpM8xgfMM84",
    authDomain: "vue-3-2022-28de5.firebaseapp.com",
    projectId: "vue-3-2022-28de5",
    storageBucket: "vue-3-2022-28de5.appspot.com",
    messagingSenderId: "523141978379",
    appId: "1:523141978379:web:447f1312867c47bb1b2a0e"
};


initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();


export { auth, db };