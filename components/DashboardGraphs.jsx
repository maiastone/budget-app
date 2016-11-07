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
