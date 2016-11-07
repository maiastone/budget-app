import React from 'react';
import firebase, { signIn, signOut } from '../firebase.js';


const LogIn = (props) => {
  const { user } = props;

  return (
    <div> {user ?
      <p>Signed in as {user && user.email}
      <button className="sign-button"
              onClick={() => signOut()}>
              Sign Out</button></p>
      : <button className="sign-button"
                onClick={() => signIn()}>
                Sign In</button>}
    </div>
    );
};
module.exports = LogIn;
