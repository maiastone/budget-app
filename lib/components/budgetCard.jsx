import React from 'react';
import Application from './application';
import moment from 'moment';


const BudgetCard = (props) => {
  const { id, title, budget, actualEntry, currentDate, updateExpense, deleteCard } = props;
  const userBudget = { id, title, budget, actualEntry, currentDate };
  const expenseArray = userBudget.actualEntry.map((expense, key) =>
    <li id={key}>
      <span className="expense-date">{moment(expense.currentDate).format('MMM Do')}</span> ${expense.expense}
    </li>);

  const integer = userBudget.actualEntry.map((expense) => parseInt(expense.expense, 10));

  const total = integer.reduce((sum, num) => sum + num, 0);


  return (
    <div id={id} className="budget-card">
      <h2 className="card-title">{title}</h2>

      <div className="status">
        <h3>Budget Amount: ${budget}</h3>
        <h3>Remaining: ${budget - total}</h3>
      </div>

      <div className="expense-display">
        <p>Total Expenses: ${total}</p>
        <ul>{expenseArray}</ul>
      </div>

      <input
        aria-label="date-input"
        className="date"
        type="date"
        onChange= {(e) => userBudget.currentDate = e.target.value}
        />

      <input
        aria-label="expense-input"
        className="expense-input"
        type="number"
        label="enter expense"
        placeholder="enter expense"
        />

      <div className="button-container">
        <button
          className="delete-button"
          onClick={(e) => deleteCard(e, id)}
          >Delete
        </button>
        <button
          className="submit-button"
          onClick={(e) => updateExpense(e, userBudget)}
          >Submit
        </button>
      </div>
    </div>
    );
};


module.exports = BudgetCard;
