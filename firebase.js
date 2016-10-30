import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDFzjjVpRLMT0d9KkY9-I-n6RNEM7vyy8Q",
  authDomain: "budget-app-620c0.firebaseapp.com",
  databaseURL: "https://budget-app-620c0.firebaseio.com",
  storageBucket: "budget-app-620c0.appspot.com",
  messagingSenderId: "765862225207"
};
firebase.initializeApp(config);




module.exports = firebase;
