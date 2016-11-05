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


    return (
      <div className="monthly-list">
        <h2>Monthly Budget</h2>
        <ul>{allTitlesList}<p>Total</p></ul>
        <ul>{allBudgetsList}{allBudgetsTotal}</ul>

      </div>
      );
  }
}

module.exports = Reports;
