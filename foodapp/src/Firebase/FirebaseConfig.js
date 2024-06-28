// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfWY8xio3Ni738UNm_AJ4eRIBsuGfFlko",
  authDomain: "food-app-6d57d.firebaseapp.com",
  projectId: "food-app-6d57d",
  storageBucket: "food-app-6d57d.appspot.com",
  messagingSenderId: "804609848161",
  appId: "1:804609848161:web:86727c80b075b72a564b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDB=getFirestore(app);
export{fireDB,auth};
