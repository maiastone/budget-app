import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
import BudgetForm from './budgetForm';
import LogIn from './signin';
import Reports from './reports';
import Dashboard from './Dashboard.jsx'

// 1) track the state for the current route
// 2) based on current route, render the right page
// 3) provide a callback to transition the route
class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      budgets: [],
      userBudget: {
        title: '',
        budget: '',
        dueDate: '',
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
    const actualExpense = e.target.previousSibling.value;
    e.target.previousSibling.value = '';
    userBudget.actualEntry.push({
      expense: actualExpense,
      currentDate: Date.now(),
    });
    const budgetRef =
    firebase.database().ref(`users/${this.state.user.uid}/${userBudget.id}/userBudget/actualEntry`);
    budgetRef.update(userBudget.actualEntry);
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
              />;
    } else if (this.state.route === 'reports') {
      child = <Reports />;
    }
    return (
      <div>

          <nav className="nav-bar">
            <div>
            <button className="nav-button"
              onClick={() => this.transitionRoute('dashboard')}>
              Home</button>
            <button className="nav-button"
              onClick={() => this.transitionRoute('budgetForm')}>
              Budgets</button>
            <button className="nav-button"
              onClick={() => this.transitionRoute('reports')}>
              Reports</button>
            </div>
            <div>
              <LogIn user={this.state.user} />
            </div>
          </nav>
          {child}
      </div>
    );
  }
}

module.exports = Application;
