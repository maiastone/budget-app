import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
import BudgetForm from './budgetForm';
import LogIn from './signin';
import Reports from './reports';
import Dashboard from './Dashboard.jsx'


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      budgets: [],
      userBudget: {
        title: '',
        budget: '',
        actualEntry: [],
      },
      route: 'dashboard',
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      this.setDatabaseRef();
    });
  }

  setDatabaseRef() {
    const budgetRef = firebase.database().ref(`users/${this.state.user.uid}`);
    budgetRef.on('value', (snapshot) => {
      const userBudget = snapshot.val() || {};
      this.setState({
        budgets: map(userBudget, (val, key) => extend(val, { key })),
      });
    });
  }

  pushBudget(e) {
    e.preventDefault();
    const userBudget = this.state.userBudget;
    const budgetRef = firebase.database().ref(`users/${this.state.user.uid}`);
    budgetRef.push({ userBudget });
    this.setState({ userBudget: { title: '', budget: '' } });
  }

  setUserBudget(e, key) {
    const userBudget = this.state.userBudget;
    userBudget[key] = e.target.value;
    this.setState({ userBudget });
  }

  updateExpense(e, userBudget) {
    e.preventDefault();
    const actualExpense = e.target.parentElement.previousSibling.value;
    e.target.parentElement.previousSibling.value = '';
    userBudget.actualEntry.push({
      expense: actualExpense,
      currentDate: '',
    });
    const budgetRef =
    firebase.database().ref(`users/${this.state.user.uid}/${userBudget.id}/userBudget/actualEntry`);
    budgetRef.update(userBudget.actualEntry);
  }

  deleteCard(e, userBudget) {
    e.preventDefault();
    this.state.userBudget.child().remove();
  }

  transitionRoute(route) {
    this.setState({ route });
  }

  render() {
    let child;
    if (this.state.route === 'dashboard') {
      child = <Dashboard
              user={this.state.user}
              budgets={this.state.budgets}
              />;
    } else if (this.state.route === 'budgetForm') {
      child = <BudgetForm
              uid={this.state.user.uid}
              budgets={this.state.budgets}
              setUserBudget={this.setUserBudget.bind(this)}
              pushBudget={this.pushBudget.bind(this)}
              updateExpense={this.updateExpense.bind(this)}
              deleteCard={this.deleteCard.bind(this)}
              />;
    } else if (this.state.route === 'reports') {
      child = <Reports
              budgets={this.state.budgets}
              />;
    }
    return (
      <div>

          <nav className="nav-bar">
            <div>
            <button className="nav-button"
              onClick={() =>
              this.transitionRoute('dashboard')}>
              Home</button>
            <button className="nav-button"
              onClick={() => this.transitionRoute('budgetForm')}>
              Enter Budget</button>
            <button className="nav-button"
              onClick={() =>
              this.transitionRoute('reports')}>
              View Reports</button>
            </div>
            <div>
              <LogIn user={this.state.user}
              />
            </div>
          </nav>
          {child}
      </div>
    );
  }
}

module.exports = Application;
