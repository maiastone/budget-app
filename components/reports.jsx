import React from 'react';


class Reports extends React.Component {
  constructor() {
    super();
    this.state = {
      allowance: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ allowance: e.target.value });
  }

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

    const allowance = this.state.allowance;
    const weeklyTotal = allBudgetsTotal / 4;
    const balance = allowance - weeklyTotal;

    const annualBudgetsArray = [];
    for (let i = 0; i < allBudgetsArray.length; i++) {
      const annualBudget = +allBudgetsArray[i] * 12;
      annualBudgetsArray.push(annualBudget);
    }
    const annualBudgetList = annualBudgetsArray.map((expense, index) => {// eslint-disable-line
      return <li key={index}>{expense}</li>;
    });

    const annualTotal = allBudgetsTotal * 12;

    return (
      <div className ="all-reports-container">

        <div className = "report-container">

          <div className="report-header">
            <h2>Monthly Budgets:</h2>
            <h2 className="card-total">Total ${allBudgetsTotal}</h2>
            <h2 className="card-total">Spent ${totalActuals}</h2>
            <h2 className="card-total">Remaining ${allBudgetsTotal - totalActuals}</h2>
          </div>

          <div className="report-list">
            <ul>{allTitlesList}</ul>
            <ul>{allBudgetsList}</ul><ul>{allActualsList}</ul>
          </div>
        </div>

        <div className ="report-container">

          <div className="report-header">
            <h2>Allowance: </h2>
            <input className="allowance-input" type="number"
                    placeholder="enter allowance"
                    onChange={this.handleChange}>
            </input>
          </div>

          <div className="report-header">
            <h2>Weekly Budget:</h2>
            <h2 className="card-total">Total ${weeklyTotal}</h2>
          </div>
          <div className="report-list">
            <ul>{allTitlesList}</ul><ul>{weeklyBudgetList}</ul>
          </div>
          <h4>Savings: ${balance}</h4>
        </div>

        <div className = "report-container">
          <div className="report-header">
            <h2>Annual Budgets:</h2>
            <h2 className="card-total">Total ${annualTotal}</h2>
          </div>
          <div className="report-list">
            <ul>{allTitlesList}</ul><ul>{annualBudgetList}</ul>
          </div>
        </div>

      </div>
      );
  }
  }

module.exports = Reports;
