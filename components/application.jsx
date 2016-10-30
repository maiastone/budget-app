import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
const auth = firebase.auth();


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      userBudget: ''
    }
  }

  signIn() {
  let google = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(google)
  }

  componentDidMount() {
    const usersRef = firebase.database().ref('users');
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user});
      // usersRef.push({
      //   user: pick(user, 'uid')
      // })
    });
  }

  setBudget(e) {
    this.setState({userBudget: e.target.value})
    const budgetRef = firebase.database().ref(`users/${this.state.user.uid}`);
    budgetRef.push({budget:this.state.userBudget})
  }

  render() {
    return (
      <div>
         <button className="sign"
          onClick={() => this.signIn()}>Sign In</button>

          <h1>{this.state.user.email}</h1>

          <input placeholder="budget item" value={this.state.userBudget}
            onChange={(e)=>this.setState({userBudget: e.target.value})}>
          </input>

          <button className="submitBudget"
            onClick={(e)=> this.setBudget(e)}>
          </button>
      </div>
    )
  }
}



module.exports = Application;
