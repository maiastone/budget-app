import React from 'react';

const BudgetCard = (props) => {
  const {id, title, budget, updateExpense, expense} = props;
  const userBudget = {id: id, title: title, expense: expense, budget: budget };
  let expenses = expense.map((expense)=><li>${expense}</li> );
  let integer = expense.map((expense)=>parseInt(expense));
  let total = integer.reduce((sum, num) => sum + num, 0);
  return(
    <div id={id} className="budget-card">
      <h2 className="card-title">{title}</h2>
      <div className="status">
        <h3>Budget Amount: ${budget}</h3>
        <h3>Remaining: ${budget-total}</h3>
      </div>
      <ul>Actual Expenses: {expenses}</ul>
      <p>Total Expenses: ${total}</p>
      <input
        label="enter expense"
        className="expense-input"
        type="text"
        placeholder="enter expense"
        />
      <button className="submit-button"
        onClick={(e)=>updateExpense(e, userBudget)}
        >Submit</button>
    </div>
    );
};


module.exports = BudgetCard;
