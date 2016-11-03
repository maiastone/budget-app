import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
import BudgetForm from './budgetForm';
import LogIn from './signin';

// 1) track the state for the current route
// 2) based on current route, render the right page
// 3) provide a callback to transition the route


function DashboardPage() {
  return <div></div>;
}


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      route: "dashboard"
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user});
    });
  }

  transitionRoute(route) {
    this.setState({route});
  }

  render() {
    let child;
    if (this.state.route === "dashboard") {
      child = <DashboardPage />;
    } else if (this.state.route === "budgetForm") {
      child = <BudgetForm uid={this.state.user.uid}   />;
    }
    return (
      <div>

          <nav className="nav-bar">
            <div>
            <button className="nav-button"
              onClick={() => this.transitionRoute("dashboard")}>
              dashboardpage</button>
            <button className="nav-button"
              onClick={() => this.transitionRoute("budgetForm")}>
              budgetForm</button>
            </div>
            <div>
              <LogIn user={this.state.user} />
            </div>
          </nav>



          <h1>DashBoard</h1>

          {child}
      </div>
    );
  }
}

module.exports = Application;
