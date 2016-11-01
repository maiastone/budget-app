import React from 'react';

const BudgetList = (props) => {
  const {budgets} = props;
    return(
      <ul>
        {budgets.map(m =>
          <li key={m.key}>{m.userBudget.amount}{m.userBudget.title}</li>)}
      </ul>
    );
  };


module.exports = BudgetList;
