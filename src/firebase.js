import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNL6Tk5LR15PQKHj4KCKNRhqtYPzmwOXU',
  authDomain: 'image-gram-7e8b8.firebaseapp.com',
  projectId: 'image-gram-7e8b8',
  storageBucket: 'image-gram-7e8b8.appspot.com',
  messagingSenderId: '568601786694',
  appId: '1:568601786694:web:47373207dd7d69adf58d47',
  measurementId: 'G-NL1YTLHQJ7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { storage, auth, db };
