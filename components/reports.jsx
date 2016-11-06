import React from 'react';
//
// }
// debugger;
// const reducedExpenseArray = [];
// for (let i = 0; i < allActualsArray.length; i++) {
//   for (let j = 0; j < allActualsArray[j].expense.length; j++);
//   const eachExpense = allActualsArray[i][j].expense;
//   const eachBudgetExpense = allActualsArray[i][j].expense;
//   reducedExpenseArray.push(eachBudgetExpense);
//
// }

// const actualEntries = [];
// const reportLists = budgets.map(m => {
//   if (!m.userBudget.actualEntry) {
//     m.userBudget.actualEntry = [];
//   }
//
//   const actualEntry = {m.userBudget.actualEntry}
// })
//
// console.log(actualEntry);
// console.log(expense)


class Reports extends React.Component {


  render() {
    const budgets = this.props.budgets;
    const allActualsArray = [];
    for (let i = 0; i < budgets.length; i++) {
      const eachBudgetExpense = this.props.budgets[i].userBudget.actualEntry;
      allActualsArray.push(eachBudgetExpense);
    }

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
    let totalArray = [];
    budgets.forEach((budget) => {
      let budgetTotal = 0;
      if(budget.userBudget.actualEntry) {
        budget.userBudget.actualEntry.forEach((entry) => {
        budgetTotal += +entry.expense;
        })
      }
      totalArray.push(budgetTotal);
    })
    console.log(totalArray)

    return (
      <div className = "monthly-container">
      <div className="monthly-list">
        <h2>Monthly Budget</h2>
        <ul>{allTitlesList}</ul>
        <ul>{allBudgetsList}</ul>
      </div>
      <div className="monthly-total">
        <h4>Total Budget</h4>
        <h2>${allBudgetsTotal}</h2>
      </div>
        <ul></ul>
        <ul></ul>
      </div>
      );
    }
  }

module.exports = Reports;
