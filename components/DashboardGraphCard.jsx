import React from 'react';

const DashboardGraphs = (props) => {
  const { key, title, budget, actualEntry } = props;
  const userBudget = { key, title, budget, actualEntry}

  const integer = userBudget.actualEntry.map((expense) => parseInt(expense.expense, 10))
  const sumExpenses = integer.reduce((sum, num) => sum + num, 0);

  // const integer = userBudget.actualEntry.map((expense) => parseInt(expense.expense, 10));
  // const total = integer.reduce((sum, num) => sum + num, 0);
  return (
    <div key={key}>
      <svg width="600" height="40" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
           <g>
             <rect fill="#FF603A" x="0" y="0"
             width={((sumExpenses / budget) * 600)}
             height="40" />
             <rect fill="#FFFFD1"
             x={((sumExpenses / budget) * 600)} y="0"
             width={600 - (sumExpenses / budget) * 600}
             height="40" />
           </g>
         </svg>
    </div>

  );
};

module.exports = DashboardGraphs;
