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
        expense: []
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
    console.log(userBudget)
    const budgetRef = firebase.database().ref(`users/${this.props.uid}`);
    budgetRef.push({userBudget});
    this.setState({userBudget: {title: '', budget: ''}});
  }

  setUserBudget(e, key) {
    let userBudget = this.state.userBudget;
    userBudget[key] = e.target.value;
    this.setState({ userBudget: userBudget });
  }

  // setExpenseState(e) {
  //   this.setState({userBudget: {expense: e.target.value}});
  // }

  updateExpense(e, userBudget) {
    let expense = e.target.previousSibling.value;
    e.target.previousSibling.value = '';
    userBudget.expense.push(expense);
    const budgetRef = firebase.database().ref(`users/${this.props.uid}/${userBudget.id}/userBudget`);
    budgetRef.update({expense: userBudget.expense});
  }


  render() {
    let { title, budget} = this.state.userBudget;
    return(
      <div>
        <div className="card">
          <form className="budget-form">

            <input className="budget-input"
              placeholder="budget item" value= {title}
              onChange={(e) => this.setUserBudget(e, 'title')}>
            </input>

            <input className="budget-input"
              placeholder="budget amount" value = {budget}
              onChange={(e) => this.setUserBudget(e, 'budget')}>
            </input>

            <div className="radio-buttons">

              <input className="radio"
              type="radio" value="true"
              name="type"
              onChange={(e)=>this.setUserBudget(e)}>
              </input>Fixed

              <input className="radio"
              type="radio" value="true"
              name="type"
              onChange={(e)=>this.setUserBudget(e)}>
              </input>Variable

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
