import React from 'react';

class SignInPage extends React.Component {

  render() {
    return (
    <div>
      <h2 className="sign-in-page"> Welcome to Budget.me! </h2>
      <h2 className="instructions">Click "Sign In" to log in with
      your Google account</h2>
    <img src="../lib/styles/images/wallet.svg"/>
    </div>
  );
  }
}

module.exports = SignInPage;
