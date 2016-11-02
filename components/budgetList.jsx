import React from 'react';

const BudgetList = (props) => {
  const {budgets} = props;
    return(
      <div>
        {budgets.map(m =>
          <div className="rendered-card"
              key={m.key}>{m.userBudget.title}{m.userBudget.amount}
              <input className="expense-input" type="text" placeholder="expense"></input>
              </div>)}


      </div>
    );
  };


module.exports = BudgetList;
