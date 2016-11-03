import React from 'react';


const BudgetCard = (props) => {
  const { id, title, budget, dueDate, actualEntry, currentDate, updateExpense } = props;
  const userBudget = { id, title, budget, dueDate, actualEntry, currentDate };
  const expenseArray = actualEntry.map((expense) => <li>${expense.expense}</li> );
  const integer = actualEntry.map((expense) => parseInt(expense.expense));
  const total = integer.reduce((sum, num) => sum + num, 0);
  return (
    <div id={id} className="budget-card">
      <h2 className="card-title">{title}</h2>
      <div className="status">
        <h3>Budget Amount: ${budget}</h3>
        <h3>Remaining: ${budget - total}</h3>
      </div>
      <ul>Actual Expenses: {expenseArray}</ul>
      <p>Total Expenses: ${total}</p>
      <input className="date"
        type="date"
        />
      <input
        label="enter expense"
        className="expense-input"
        type="text"
        placeholder="enter expense"
      />
      <button className="submit-button"
        onClick={(e) => updateExpense(e, userBudget)}
        >Submit</button>
    </div>
    );
};


module.exports = BudgetCard;
