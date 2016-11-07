import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDFzjjVpRLMT0d9KkY9-I-n6RNEM7vyy8Q',
  authDomain: 'budget-app-620c0.firebaseapp.com',
  databaseURL: 'https://budget-app-620c0.firebaseio.com',
  storageBucket: 'budget-app-620c0.appspot.com',
  messagingSenderId: '765862225207',
};

export default firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
