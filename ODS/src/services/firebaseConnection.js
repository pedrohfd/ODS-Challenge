import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyA47y_cBNR1IhQ8CyBD38YEMU3slHOy-Qg',
  authDomain: 'facens-ods-challenge.firebaseapp.com',
  databaseURL: 'https://facens-ods-challenge.firebaseio.com',
  projectId: 'facens-ods-challenge',
  storageBucket: 'facens-ods-challenge.appspot.com',
  messagingSenderId: '301957118887',
  appId: '1:301957118887:web:31a363e1c4b1272414d482',
  measurementId: 'G-3Y98H44B0Q',
};

if (!firebase.apps.length) {
  // Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
