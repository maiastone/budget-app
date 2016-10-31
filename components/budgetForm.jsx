import React from 'react';
const firebase = require('../firebase');


class BudgetForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userBudget: {
        title: '',
        amount: ''
      },
      updatedUserBudget: {
        title: '',
        amount: ''
      }
    };
  }

  pushBudget(e) {
    e.preventDefault();
    let userBudget = this.state.userBudget;
    const budgetRef = firebase.database().ref(`users/${this.props.uid}`);
    budgetRef.push({userBudget});
  }

  setUserBudget(e, key) {
    let userBudget = this.state.userBudget;
    userBudget[key] = e.target.value;
    this.setState({ userBudget: userBudget });
  }

  updateFirebaseUserBudget(e) {
    e.preventDefault();
    let updatedUserBudget = this.state.updatedUserBudget;
    const budgetRef = firebase.database().ref(`users/${this.props.uid}`);
    budgetRef.update({updatedUserBudget});
  }

  setUpdatedUserBudget(e, key) {
    let updatedUserBudget = this.state.updatedUserBudget;
    updatedUserBudget[key] = e.target.value;
    this.setState({ updatedUserBudget: updatedUserBudget });
  }


  render() {
    return(
      <form>
        <input placeholder="budget item"
          onChange={(e) => this.setUserBudget(e, 'title')}>
        </input>
        <input placeholder="budget amount"
          onChange={(e) => this.setUserBudget(e, 'amount')}>
        </input>
        <button className="submitBudget"
          onClick={(e) => this.pushBudget(e)}>Submit Budget
        </button>
        <br />
        <input placeholder="update budget item"
          onChange={(e) => this.setUpdatedUserBudget(e, 'title')}>
        </input>
        <input placeholder="update budget amount"
          onChange={(e) => this.setUpdatedUserBudget(e, 'amount')}>
        </input>
        <button className="update submitBudget"
          onClick={(e) => this.updateFirebaseUserBudget(e)}>Update Budget
        </button>

      </form>
    )
  }
}


module.exports = BudgetForm;
