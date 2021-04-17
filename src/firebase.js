import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5WQwH2zEo3LOhc6knDkXg1E9KcigqIpw',
  authDomain: 'product-app-f9343.firebaseapp.com',
  databaseURL: 'https://product-app-f9343-default-rtdb.firebaseio.com',
  projectId: 'product-app-f9343',
  storageBucket: 'product-app-f9343.appspot.com',
  messagingSenderId: '1086267291185',
  appId: '1:1086267291185:web:b4581b738e5e349d66c710',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
