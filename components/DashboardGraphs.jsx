import React from 'react';
import DashboardGraphCard from './DashboardGraphCard.jsx';

class DashboardGraphs extends React.Component {


  render() {
    const budgets = this.props.budgets;
    const budgetGraphs = budgets.map(m => {
      if (!m.userBudget.actualEntry) {
        m.userBudget.actualEntry = [];
      }
      return (
        <DashboardGraphCard
          className="graphz"
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


// const totalActualsArray = [];
// budgets.forEach((budget) => {
//   let budgetTotal = 0;
//   if (budget.userBudget.actualEntry) {
//     budget.userBudget.actualEntry.forEach((entry) => {
//       budgetTotal += +entry.expense;
//     });
//   }
//   totalActualsArray.push(budgetTotal);
//   parseInt(totalActualsArray, 10);
//   if (totalActualsArray.length) {
//     const totalActuals = totalActualsArray.reduce((sum, num) => sum + num, 0);
//     return (
//       <div>{totalActuals}</div>
//     )
//   }
