import React from 'react';


const DashboardGraphs = (props) => {
  const { title, budget, actualEntry } = props;
  const userBudget = { title, budget, actualEntry };

  const budgetInteger = userBudget.actualEntry.map((expense) => parseInt(expense.expense, 10));
  const sumExpenses = budgetInteger.reduce((sum, num) => sum + num, 0);

  return (
    <div className="dashboardGraphs">
    <h2>{title}</h2>
      <svg width="300" height="40" viewBox="0 0 300 40" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect fill="#e74c3c" x="0" y="0"
          width={((sumExpenses / budget) * 400)}
          height="40" />
          <rect fill="#FFFFD1"
          x={((sumExpenses / budget) * 400)} y="0"
          width={400 - (sumExpenses / budget) * 400}
          height="40" />
        </g>
     </svg>
     <p>$ {((budget - sumExpenses) / 4).toFixed(2)} available for the week </p>
    </div>
  );
};


module.exports = DashboardGraphs;
