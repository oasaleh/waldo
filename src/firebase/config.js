import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCeIWyCqwwZhGq45q0JWF6LZzHxp894nP8',
  authDomain: 'waldo-ccc68.firebaseapp.com',
  projectId: 'waldo-ccc68',
  storageBucket: 'waldo-ccc68.appspot.com',
  messagingSenderId: '657553707535',
  appId: '1:657553707535:web:c06813c5dbfd4aa272c97a',
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_apiKey,
//   authDomain: process.env.REACT_APP_FIREBASE_authDomain,
//   projectId: process.env.REACT_APP_FIREBASE_projectId,
//   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
//   appId: process.env.REACT_APP_FIREBASE_appId,
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set shortcuts
const db = firebase.firestore();
const storage = firebase.storage();

// export default firebase;
export { db, storage };
// const firebaseConfig = {
//   apiKey: "AIzaSyCeIWyCqwwZhGq45q0JWF6LZzHxp894nP8",
//   authDomain: "waldo-ccc68.firebaseapp.com",
//   projectId: "waldo-ccc68",
//   storageBucket: "waldo-ccc68.appspot.com",
//   messagingSenderId: "657553707535",
//   appId: "1:657553707535:web:c06813c5dbfd4aa272c97a"
// };
