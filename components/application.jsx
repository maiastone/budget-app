import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
import BudgetForm from './budgetForm';
const auth = firebase.auth();


class Application extends React.Component {
  constructor() {
    super();
    this.setBudget = this.setBudget.bind(this);
    this.setUserBudget = this.setUserBudget.bind(this);
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
          <BudgetForm setBudget={this.setBudget} setUserBudget={this.setUserBudget}  />
      </div>
    )
  }
}


module.exports = Application;
