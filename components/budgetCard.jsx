import React from 'react';

const BudgetCard = (props) => {
  const {id, title, budget, updateExpense} = props;

  return(
    <div id={id}>

      <h2>{title}</h2>
      <h3>{budget}</h3>

      <input
      label="enter expense"
      className="expense-input"
      type="text"
      placeholder="enter expense"
      onChange={(e)=>updateExpense(e)}>
      </input>

      <button className="">Submit</button>

      <p>remaining:</p>

    </div>
  );
};


module.exports = BudgetCard;
