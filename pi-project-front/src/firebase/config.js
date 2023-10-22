/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBCYqh-EYO1IUxq1MffVcbmEfLMF7w2dOk",
  authDomain: "project-pi-backend-5159f.firebaseapp.com",
  projectId: "project-pi-backend-5159f",
  storageBucket: "project-pi-backend-5159f.appspot.com",
  messagingSenderId: "1095917767651",
  appId: "1:1095917767651:web:b4f4d9918f8417fbc7aed6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};