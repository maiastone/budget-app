import React from 'react';

const DashboardGraphs = (props) => {
  const { budgets } = props;
  const totalbudget = parseInt(budgets[0].userBudget.budget, 10);
  const sumExpenses = parseInt(budgets[0].userBudget.actualEntry[0].expense, 10);
  console.log(totalbudget);
  console.log(sumExpenses);

  //
  // const integer = userBudget.actualEntry.map((expense) => parseInt(expense.expense, 10));
  // const total = integer.reduce((sum, num) => sum + num, 0);
  return (
    <div>
      <svg width="600" height="40" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
           <g>
             <rect fill="#FF603A" x="0" y="0" width={((sumExpenses / totalbudget) * 600)} height="40" />
             <rect fill="#FFFFD1" x={((sumExpenses / totalbudget) * 600)} y="0" width={600 - (sumExpenses / totalbudget) * 600} height="40" />
           </g>
         </svg>
    </div>

  );
};

module.exports = DashboardGraphs;
