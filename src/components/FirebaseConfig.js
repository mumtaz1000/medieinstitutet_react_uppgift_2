// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import dotenv from 'dotenv'
import firebase from "firebase/app"
dotenv.config()
console.log(process.env.REACT_APIKEY)
const firebaseConfig = {
    apiKey:"AIzaSyBifqiEucJKs6N9FDQlY27lo1ZYwcICM3E",
    authDomain: "mumtaz-medieinstitutet-project.firebaseapp.com",
    projectId: "mumtaz-medieinstitutet-project",
    storageBucket: "mumtaz-medieinstitutet-project.appspot.com",
    messagingSenderId: "378069844101",
    appId: "1:378069844101:web:044f53de0c1ab26bae29ec",
    measurementId: "G-JNTE8Q78KQ"
  };
firebase.initializeApp(firebaseConfig)