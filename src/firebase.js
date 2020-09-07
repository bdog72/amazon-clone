//
//

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyACVOFMedxcMW2POTvDdNrYOAuKvA9DEI8',
  authDomain: 'clone-cf384.firebaseapp.com',
  databaseURL: 'https://clone-cf384.firebaseio.com',
  projectId: 'clone-cf384',
  storageBucket: 'clone-cf384.appspot.com',
  messagingSenderId: '603978989584',
  appId: '1:603978989584:web:a1a99df907a26f34a9ca95',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
