import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
import BudgetList from './budgetList';


class BudgetForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userBudget: {
        title: '',
        budget: '',
        expense: ''
      },
      budgets: []
    };
  }

  componentDidMount() {
    const budgetRef = firebase.database().ref(`users/${this.props.uid}`);
    budgetRef.on('value', (snapshot) => {
      const userBudget = snapshot.val() || {};
      this.setState({
        budgets: map(userBudget, (val, key) => extend(val, { key }))
      });
    });
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

  updateExpense(e) {
    // e.preventDefault();
    let expense = {expense: e.target.value};
    const budgetRef = firebase.database().ref(`users/${this.props.uid}/${this.state.budgets[5].key}/userBudget`);
    budgetRef.update({expense});
  }

  // updateFirebaseUserBudget(e) {
  //   e.preventDefault();
  //   let updatedUserBudget = this.state.updatedUserBudget;
  //   const budgetRef = firebase.database().ref(`users/${this.props.uid}`);
  //   budgetRef.update({updatedUserBudget});
  // }
  //
  // setUpdatedUserBudget(e, key) {
  //   let updatedUserBudget = this.state.updatedUserBudget;
  //   updatedUserBudget[key] = e.target.value;
  //   this.setState({ updatedUserBudget: updatedUserBudget });
  // }


  render() {
    return(
      <div>
        <div className="card">
          <form className="budget-form">

            <input className="budget-input"
              placeholder="budget item"
              onChange={(e) => this.setUserBudget(e, 'title')}>
            </input>

            <input className="budget-input"
              placeholder="budget amount"
              onChange={(e) => this.setUserBudget(e, 'budget')}>
            </input>

            <div className="radio-buttons">

              <input className="radio"
              type="radio" value="true"
              onClick={(e)=>{this.setUserBudget(e, 'fixed')}}></input>Fixed

              <input className="radio"
              type="radio" value="true"
              onClick={(e)=>{this.setUserBudget(e, 'variable')}}></input>Variable

            </div>

            <button className="submit-button"
              onClick={(e) => this.pushBudget(e)}>Submit Budget
            </button>

          </form>
        </div>
        <BudgetList budgets={this.state.budgets} updateExpense={this.updateExpense.bind(this)} />
      </div>
    );
  }
}


module.exports = BudgetForm;
