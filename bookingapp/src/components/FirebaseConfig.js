// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import dotenv from 'dotenv'
import firebase from "firebase"
dotenv.config()
console.log(process.env.REACT_APP_API_KEY)
const firebaseConfig = {
    apiKey:  process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId:process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: "378069844101",
    appId: process.env.REACT_APP_APPID,
    measurementId: "G-JNTE8Q78KQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const firestore = firebaseApp.firestore();

  export default firestore;