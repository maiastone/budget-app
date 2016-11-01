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
        amount: ''
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

  // <input placeholder="update budget amount"
  //   onChange={(e) => this.setUpdatedUserBudget(e, 'amount')}>
  // </input>
  // <button className="update submitBudget"
  //   onClick={(e) => this.updateFirebaseUserBudget(e)}>Update Budget
  // </button>

  render() {
    return(
      <div className="card">
        <form className="budget-form">

          <input className="budget-input" placeholder="budget item"
            onChange={(e) => this.setUserBudget(e, 'title')}>
          </input>

          <input className="budget-input" placeholder="budget amount"
            onChange={(e) => this.setUserBudget(e, 'amount')}>
          </input>

          <div className="radio-buttons">

            Fixed<input className="radio" type="radio" value="true"
            onChange={(e)=>{this.setUserBudget(e, 'fixed')}}></input>

          Variable<input className="radio" type="radio" value="true"
             onChange={(e)=>{this.setUserBudget(e, 'variable')}}></input>

          </div>

          <button className="submit-button"
            onClick={(e) => this.pushBudget(e)}>Submit Budget
          </button>

        </form>

        <BudgetList budgets={this.state.budgets} />
      </div>
    );
  }
}


module.exports = BudgetForm;
