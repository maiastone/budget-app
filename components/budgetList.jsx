import React from 'react';
import BudgetCard from './budgetCard';


class BudgetList extends React.Component {

  render() {
  let budgets = this.props.budgets;
  let budgetCards = budgets.map(m => {
  return (
    <BudgetCard className="rendered-card"
      key={m.key}
      id={m.key}
      title={m.userBudget.title}
      budget={m.userBudget.budget}
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


module.exports = BudgetList;
