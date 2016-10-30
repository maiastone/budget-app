import React from 'react';

class BudgetForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <form>
        <input placeholder="budget item"
          onChange={(e) => this.props.setUserBudget(e, 'title')}>
        </input>
        <input placeholder="budget amount"
          onChange={(e) => this.props.setUserBudget(e, 'amount')}>
        </input>
        <button className="submitBudget"
          onClick={(e) => this.props.setBudget(e)}>
        </button>
      </form>
    )
  }
}

module.exports = BudgetForm;
