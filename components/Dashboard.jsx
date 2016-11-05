// we want the user name
// we want the date
// we want to display a pie graph/bar graph for how much you have spent on x budget
// we want to display remaining $ to spend daily and monthly
import React from 'react';
import DashboardGraphs from './DashboardGraphs'

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      user: null,
      budgets: [],
    };
  }

  // let todaysSpending;
  // if (!budgets) {
  //   todaysSpending = '';
  // } else {
  //   todaysSpending = budgets;
  // }
  componentWillReceiveProps() {
    this.setState({ user: this.props.user, budgets: this.props.budgets
    })
  }

  render() {
    let userName;
    // if (!this.state.user) {
    //   userName = '';
    // } else {
    //   userName = this.state.user.displayName.split('').shift();
    // }
    // let totalSpent;
    // let budget;
    // if (this.state.budgets !== []) {
    //   debugger;
    //   const actualspending =
    //   this.state.budgets[0].actualEntry.map((spending) =>
    //   parseInt(spending.expense, 10));
    //   totalSpent = actualspending.reduce((sum, num) => sum + num, 0);
    //   budget = this.state.budgets[0].userBudget.budget;
    // } else {
    //   budget = '';
    //   totalSpent = '';
    // }
    if (this.state.user !== null) {
      userName = this.state.user.displayName;
      return (
      <div>
        <div> Welcome back, {userName}!</div>
        <div>Today, you have ... to spend on ...</div>
        <div>bruh</div>
        <div>You have this much to spend this week:</div>
        <DashboardGraphs budget= {this.state.budgets}/>
      </div>
      );
    } else {
      return (
        <div>Hello</div>
      )
    }
  }
}


module.exports = Dashboard;
