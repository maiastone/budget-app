import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
import BudgetForm from './budgetForm';
import LogIn from './signin';
import Reports from './reports';

// 1) track the state for the current route
// 2) based on current route, render the right page
// 3) provide a callback to transition the route


function DashboardPage() {
  return <div>
      <h1>Today</h1>
  </div>;
}


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      route: 'dashboard',
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  transitionRoute(route) {
    this.setState({ route });
  }

  render() {
    let child;
    if (this.state.route === 'dashboard') {
      child = <DashboardPage />;
    } else if (this.state.route === 'budgetForm') {
      child = <BudgetForm uid={this.state.user.uid} />;
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
