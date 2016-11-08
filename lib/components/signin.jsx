import React from 'react';
import firebase, { signIn, signOut } from '../firebase.js';


const LogIn = (props) => {
  const { user } = props;

  return (
    <div className="signInButton"> {user ?
      <button className="sign-button"
              onClick={() => signOut()}>
              Sign Out</button>
      : <button className="sign-button"
                onClick={() => signIn()}>
                Sign In</button>}
    </div>
    );
};
module.exports = LogIn;
