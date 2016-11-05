import React from 'react';


class Reports extends React.Component {


  render() {
    const budgets = this.props.budgets;
    const allBudgetsArray = [];

    for (let i = 0; i < budgets.length; i++) {
      const allBudgets = this.props.budgets[i].userBudget.budget;
      allBudgetsArray.push(allBudgets);
    }

    const allBudgetsList = allBudgetsArray.map(() => <li>{allBudgetsArray}</li>)

    return (
      <div>
        <ul>{allBudgetsList}</ul>
      </div>
      );
  }
}

module.exports = Reports;
