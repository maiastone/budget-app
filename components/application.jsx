import React from 'react';
import firebase from '../firebase';
import { pullAllBy, map, extend } from 'lodash';
import update from 'react-addons-update';
import BudgetForm from './budgetForm.jsx';
import LogIn from './signin.jsx';
import AppLogo from './AppLogo.jsx';
import Reports from './reports.jsx';
import SignInPage from './SignInPage.jsx';
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
      currentDate: userBudget.currentDate || Date.now(),
    });
    const budgetRef =
    firebase.database().ref(`users/${this.state.user.uid}/${userBudget.id}/userBudget/actualEntry`);
    budgetRef.update(userBudget.actualEntry);
  }


  deleteCard(e, id) {
    e.preventDefault();
    const newBudgets = pullAllBy(this.state.budgets, [{ key: id }], 'id');
    this.setState({ budgets: newBudgets });
    const deletedBudgetRef = firebase.database().ref(`users/${this.state.user.uid}/${id}`);
    deletedBudgetRef.remove();
  }

  transitionRoute(route) {
    this.setState({ route });
  }

  render() {
    let child;
    if (!this.state.user) {
      child = <SignInPage />;
    }
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
        {child}
          <nav className="header">
            <div className="nav-bar">
            <button className="nav-button-logo"
              onClick={() =>
              this.transitionRoute('dashboard')}>
              Home</button>
            <button className="nav-button"
              onClick={() => this.transitionRoute('budgetForm')}>
              Budgets</button>
            <button className="nav-button"
              onClick={() =>
              this.transitionRoute('reports')}>
              Reports</button>
            <LogIn user={this.state.user} />
            </div>
          </nav>
      </div>
    );
  }
}


module.exports = Application;
