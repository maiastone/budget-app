import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
const auth = firebase.auth();


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      userBudget: {
        title: '',
        amount: ''
      }
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
    });
  }

  setBudget(e) {
    let userBudget = this.state.userBudget;
    const budgetRef = firebase.database().ref(`users/${this.state.user.uid}`);
    budgetRef.push({userBudget})
  }

  setUserBudget(e, key) {
    let userBudget = this.state.userBudget;
    userBudget[key] = e.target.value;
    this.setState({userBudget: userBudget})
  }

  render() {
    return (
      <div>
         <button className="sign"
          onClick={() => this.signIn()}>Sign In</button>

          <h1>{this.state.user.email}</h1>

        <form>

          <input placeholder="budget item" value={this.state.userBudget.title}
            onChange={(e)=>this.setUserBudget(e, 'title')}>
          </input>

          <input placeholder="budget amount"
            value={this.state.userBudget.amount}
            onChange={(e)=>this.setUserBudget(e, 'amount')}>
          </input>

          <button className="submitBudget"
            onClick={(e)=> this.setBudget(e)}>
          </button>

        </form>
      </div>
    )
  }
}



module.exports = Application;
