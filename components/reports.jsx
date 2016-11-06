import React from 'react';


class Reports extends React.Component {

  render() {
    const budgets = this.props.budgets;

    const allBudgetsArray = [];
    for (let i = 0; i < budgets.length; i++) {
      const allBudgets = this.props.budgets[i].userBudget.budget;
      allBudgetsArray.push(allBudgets);
    }
    const allBudgetsList = allBudgetsArray.map((budgets, index) => { // eslint-disable-line
      return <li key={index}>{budgets}</li>;
    });

    const totalIntegers = allBudgetsArray.map((budget) =>
      parseInt(budget, 10));
    const allBudgetsTotal =
      totalIntegers.reduce((sum, num) => sum + num, 0);


    const allTitlesArray = [];
    for (let i = 0; i < budgets.length; i++) {
      const allTitles = this.props.budgets[i].userBudget.title;
      allTitlesArray.push(allTitles);
    }
    const allTitlesList = allTitlesArray.map((title, index) => { // eslint-disable-line
      return <li key={index}>{title}</li>;
    });


    const totalActualsArray = [];
    budgets.forEach((budget) => {
      let budgetTotal = 0;
      if (budget.userBudget.actualEntry) {
        budget.userBudget.actualEntry.forEach((entry) => {
          budgetTotal += +entry.expense;
        });
      }
      totalActualsArray.push(budgetTotal);
    });

    const allActualsList = totalActualsArray.map((expense, index) => { // eslint-disable-line
      return <li key={index}>{expense}</li>;
    });

    const totalActuals = totalActualsArray.reduce((sum, num) => sum + num, 0);


    const weeklyBudgetsArray = [];
    for (let i = 0; i < allBudgetsArray.length; i++) {
      const weeklyBudget = +allBudgetsArray[i] / 4;
      weeklyBudgetsArray.push(weeklyBudget);
    }

    const weeklyBudgetList = weeklyBudgetsArray.map((expense, index) => { // eslint-disable-line
      return <li key={index}>{expense}</li>;
    });

    return (
      <div className = "reports-container">

        <div className = "monthly-container">
          <div className="monthly-total">
            <h2>Monthly Budgets:</h2>
            <h2 className="card-total">Total ${allBudgetsTotal}</h2>
            <h2 className="card-total">Spent ${totalActuals}</h2>
          </div>
          <div className="monthly-list">
            <ul>{allTitlesList}</ul>
            <ul>{allBudgetsList}</ul><ul>{allActualsList}</ul>
          </div>
        </div>

        <div className = "small-reports-container">
          <h2 className="small-card-total">Weekly Budget:</h2>
          <h2 className="small-card-total">Total ${allBudgetsTotal / 4}</h2>
          <div className="weekly-list">
            <ul>{allTitlesList}</ul>
            <ul className="weekly-budget-list">{weeklyBudgetList}</ul>
          </div>
        </div>

      </div>
      );
  }
  }

module.exports = Reports;
