import React from 'react';

const budgetList = (props) => {
  const {budgets} = props;
    return(
      <ul>
        {budgets.map(m =>
          <li key={m.key}>{m.amount}{m.title}</li>)}
      </ul>
    );
  };


module.exports = budgetList;
