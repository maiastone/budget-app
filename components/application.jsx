import React from 'react';
const firebase = require('../firebase');
import { pick, map, extend } from 'lodash';
import BudgetForm from './budgetForm';
const auth = firebase.auth();

// 1) track the state for the current route
// 2) based on current route, render the right page
// 3) provide a callback to transition the route


function DashboardPage() {
  return <div>Im a dashboard</div>
}

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      route: "dashboard"
    };
  }

  signIn() {
    let google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google);
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
    let child
    if (this.state.route === "dashboard") {
      child = <DashboardPage />;
    } else if (this.state.route === "budgetForm") {
      child = <BudgetForm uid={this.state.user.uid}   />
    }
    return (
      <div>
          <nav>
          super sweet nav
            <button onClick={() => this.transitionRoute("dashboard")}>dashboardpage</button>
            <button onClick={() => this.transitionRoute("budgetForm")}>budgetForm</button>
          </nav>
         <button className="sign"
          onClick={this.signIn}>Sign In</button>
          <h1>{this.state.user && this.state.user.email}</h1>
          {child}
      </div>
    )
  }
}

module.exports = Application;
