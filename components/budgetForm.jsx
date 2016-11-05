import React from 'react';
const firebase = require('../firebase');
import { map, extend } from 'lodash';
import BudgetList from './budgetList';
import Application from './application';


const BudgetForm = (props) => {
  const { budgets, title, budget, updateExpense } = props;

  return (
    <div>
      <div className="card">
        <form className="budget-form">

          <input className="budget-input"
            placeholder="budget item" value= {title}
            onChange={(e) => this.setUserBudget(e, 'title')}>
          </input>

          <input className="budget-input"
            placeholder="budget amount" value = {budget}
            onChange={(e) => this.setUserBudget(e, 'budget')}>
          </input>

          <input className="date"
            type="date" />

          <div className="radio-buttons">
            <input className="radio"
              type="radio" value="true"
              name="type"
              onChange={(e) => this.setUserBudget(e)}>
            </input>Fixed

            <input className="radio"
              type="radio" value="true"
              name="type"
              onChange={(e) => this.setUserBudget(e)}>
            </input>Variable
          </div>

          <button className="submit-button"
            onClick={(e) => this.pushBudget(e)}>Submit Budget
          </button>

        </form>
      </div>
      <BudgetList budgets={budgets}
                  updateExpense={updateExpense} />
    </div>
  );
}


module.exports = BudgetForm;
