import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBqrdCBC7KZbK25FkrSWHoDk_q9ol2K4is',
  authDomain: 'slack-clone-f0aa6.firebaseapp.com',
  projectId: 'slack-clone-f0aa6',
  storageBucket: 'slack-clone-f0aa6.appspot.com',
  messagingSenderId: '229769536684',
  appId: '1:229769536684:web:be21061ca8ade06c93ab09',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
