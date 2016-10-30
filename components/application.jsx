import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
const auth = firebase.auth();


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false
    }
  }

  signIn() {
    let google = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(google)
  }

  // const userMessagesRef = //firebasedatabasesyntax(use current user state here)
  // userMessages.push(input variable )

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user});
    });
  }

  render() {
    return (
      <div>
         <button className="sign"
          onClick={() => this.signIn()}>Sign In</button>

          <h1>{this.state.user.email}</h1>
          <input  placeholder="budget item"></input>
      </div>
    )
  }
}



module.exports = Application;
