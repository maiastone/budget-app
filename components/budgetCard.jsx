import React from 'react';
import Application from './application';
import moment from 'moment';


const BudgetCard = (props) => {
  const { id, title, budget, actualEntry, currentDate, updateExpense, deleteCard } = props;
  const userBudget = { id, title, budget, actualEntry, currentDate };
  const formatDueDate = moment().format('MMM Do');

  const expenseArray = userBudget.actualEntry.map((expense, key) =>
    <li id={key}><span className="expense-date">{formatDueDate}</span> ${expense.expense}</li>);

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
        <ul>Actual Expenses {expenseArray}</ul>
        <p>Total Expenses: ${total}</p>
      </div>

      <input className="date"
        type="date">
      </input>

      <input className="expense-input"
              type="text"
              label="enter expense"
              placeholder="enter expense"/>

      <div className="button-container">
        <button className="delete-button"
          onClick={(e) => deleteCard(e)}
          >Delete Budget
        </button>
        <button className="submit-button"
          onClick={(e) => updateExpense(e, userBudget)}
          >Submit Expense
        </button>
      </div>

    </div>
    );
};


module.exports = BudgetCard;
