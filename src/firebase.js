import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA1vC2YAPktFVZooh1pGe6mPBTl5TzydYQ",
    authDomain: "slack-clone-22c5f.firebaseapp.com",
    projectId: "slack-clone-22c5f",
    storageBucket: "slack-clone-22c5f.appspot.com",
    messagingSenderId: "869573338719",
    appId: "1:869573338719:web:808cef8c66270a0fc75dea",
    measurementId: "G-SBVEB09W4M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;

