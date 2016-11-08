import React, { Component, PropTypes } from 'react';
import BudgetCard from './budgetCard';
import Application from './application';

class BudgetList extends Component {


  render() {
    const budgets = this.props.budgets;
    const budgetCards = budgets.map(m => {
      if (!m.userBudget.actualEntry) {
        m.userBudget.actualEntry = [];
      }
      return (
        <BudgetCard className="rendered-card"
          key={m.key}
          id={m.key}
          title={m.userBudget.title}
          budget={m.userBudget.budget}
          dueDate={m.userBudget.dueDate}
          actualEntry={m.userBudget.actualEntry}
          currentdate={m.userBudget.actualEntry.currentDate}
          updateExpense={this.props.updateExpense}
          setUserBudget={this.props.setUserBudget}
          deleteCard={this.props.deleteCard}
        />
      );
    });

    return (
      <div>
        {budgetCards}
      </div>
    );
  }
}

BudgetList.propTypes = {
  budget: PropTypes.number,
};


module.exports = BudgetList;
