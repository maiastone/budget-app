import React from 'react';

const BudgetCard = (props) => {
  const {id, title, budget, updateExpense, setExpenseState} = props;

  return(
    <div id={id} className="budget-card">
      <h2>{title}</h2>
      <h3>{budget}</h3>

      <input
        label="enter expense"
        className="expense-input"
        type="text"
        placeholder="enter expense"
        onChange={(e) => setExpenseState(e)}>
      </input>

      <button className="submit-expense"
        onClick={(e)=>updateExpense(e)}
        >Submit</button>

      <p>remaining:</p>
  </div>
    );
};


module.exports = BudgetCard;
