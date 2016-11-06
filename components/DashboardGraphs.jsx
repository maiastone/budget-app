import React from 'react';
import DashboardGraphCard from './DashboardGraphCard';

class DashboardGraphs extends React.Component {


  render() {
    const budgets = this.props.budgets;
    const budgetGraphs = budgets.map(m => {
      if (!m.userBudget.actualEntry) {
        m.userBudget.actualEntry = [];
      }
      return (
        <DashboardGraphCard className="graphz"
          key={m.key}
          title={m.userBudget.title}
          budget={m.userBudget.budget}
          actualEntry={m.userBudget.actualEntry}
        />
      );
    });

    return (
      <div>
        {budgetGraphs}
      </div>
    );
  }
}

module.exports = DashboardGraphs;

// import React from 'react';
// import DashboardGraphs from './DashboardGraphs'
//
// class Dashboard extends React.Component {
//
//   constructor() {
//     super();
//     this.state = {
//       user: null,
//     };
//   }
//
//   // let todaysSpending;
//   // if (!budgets) {
//   //   todaysSpending = '';
//   // } else {
//   //   todaysSpending = budgets;
//   // }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps !== this.state) {
//       this.setState({ user: this.props.user})
//
//     }
//   }
//
//   render() {
//     let userName;
//     // if (!this.state.user) {
//     //   userName = '';
//     // } else {
//     //   userName = this.state.user.displayName.split('').shift();
//     // }
//     // let totalSpent;
//     // let budget;
//     // if (this.state.budgets !== []) {
//     //   debugger;
//     //   const actualspending =
//     //   this.state.budgets[0].actualEntry.map((spending) =>
//     //   parseInt(spending.expense, 10));
//     //   totalSpent = actualspending.reduce((sum, num) => sum + num, 0);
//     //   budget = this.state.budgets[0].userBudget.budget;
//     // } else {
//     //   budget = '';
//     //   totalSpent = '';
//     // }
//     if (this.state.user !== null) {
//       userName = this.state.user.displayName;
//       return (
//       <div>
//         <div> Welcome back, {userName}!</div>
//         <div>Today, you have ... to spend on ...</div>
//         <div>bruh</div>
//         <div>You have this much to spend this week:</div>
//
//         const budgetGraphz = budgets.map(m => {
//           if (!m.userBudget.actualEntry) {
//             m.userBudget.actualEntry = [];
//           }
//           return (
//             <DashboardGraphs className="rendered-card"
//               key={m.key}
//               title={m.userBudget.title}
//               budget={m.userBudget.budget}
//               actualEntry={m.userBudget.actualEntry}
//             />
//           );
//         });
//
//
//
//
//
//
//         <DashboardGraphs budgets= {this.props.budgets}/>
//       </div>
//       );
//     } else {
//       return (
//         <div>{budgetGraphz}</div>
//       )
//     }
//   }
// }
