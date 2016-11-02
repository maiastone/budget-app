import React from 'react';


const BudgetList = (props) => {
  const {updateExpense, budgets} = props;

    return(
      <div>
        {budgets.map(m =>
          <div className="rendered-card"
              key={m.key}>Title:{m.userBudget.title}
              <br/>
              Budget:{m.userBudget.budget}

          <input label="enter expense"
            className="expense-input"
            type="text"
            placeholder="enter expense"
            onChange={(e)=>updateExpense(e)}
             ></input>

          <button className="">Submit</button>
          <p>remaining:</p>
          </div>)}


      </div>
    );
  };



module.exports = BudgetList;
