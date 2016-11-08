import React from 'react';
const firebase = require('../firebase');
import { map, extend } from 'lodash';
import BudgetList from './budgetList';
import Application from './application';


const BudgetForm = (props) => {
  const { budgets, title, budget, updateExpense, setUserBudget, pushBudget, deleteCard } = props;

  return (
    <div>
      <div className="card">
        <form id="budget-name"className="budget-form">
          <h2 className="card-title">Enter Budgets</h2>
          <input
            aria-label="budget-title"
            className="budget-input"
            placeholder="enter budget item"
            value= {title}
            onChange={(e) => setUserBudget(e, 'title')}>
          </input>

          <input
            aria-label="budget-input"
            className="budget-input"
            id="budget-amount"
            type="number"
            placeholder="$ enter budget amount"
            value = {budget}
            onChange={(e) => setUserBudget(e, 'budget')}>
          </input>

          <button
            className="submit-button"
            onClick={(e) => pushBudget(e)}>Submit Budget
          </button>

        </form>
      </div>
      <BudgetList budgets={budgets}
                  updateExpense={updateExpense}
                  deleteCard={deleteCard} />
    </div>
  );
};


module.exports = BudgetForm;
