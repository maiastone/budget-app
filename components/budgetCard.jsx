import React from 'react';
import moment from 'moment';
import Application from './application';


const BudgetCard = (props) => {
  const { id, title, budget, dueDate, actualEntry, currentDate, updateExpense } = props;
  const userBudget = { id, title, budget, dueDate, actualEntry, currentDate };
  console.log(actualEntry)
  const formatDueDate = moment().format('MMM Do');
  const expenseArray = userBudget.actualEntry.map((expense) =>
    <li><span className="expense-date">{formatDueDate}</span> ${expense.expense}</li>);
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
        type="date"
        />
      <input className="expense-input"
        type="text"
        label="enter expense"
        placeholder="enter expense"
      />
      <button className="submit-button"
        onClick={(e) => this.updateExpense(e, userBudget).bind(this)}
        >Submit Expense</button>

    </div>
    );
};


module.exports = BudgetCard;
