import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAHXAtiBE1W3yYsiSGyhnK7FBVyydAalP8',
  authDomain: 'chat-app-d59cd.firebaseapp.com',
  databaseURL: 'https://chat-app-d59cd.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '1067075746848'
};

firebase.initializeApp(config);




module.exports = firebase;
