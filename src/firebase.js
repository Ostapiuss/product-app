// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_FIREBASE_DATABASE,
  projectId: process.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_FIREBASSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_SENDER_ID,
  appId: process.env.REACT_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export default firebase;
