import React from 'react';
import DashboardGraphs from './DashboardGraphs.jsx'
import DashboardQuotes from './DashboardQuotes.jsx'


const Dashboard = (props) => {
  const { user, budgets } = props;

  let userName;
  if (!user) {
    userName = null;
  } else if (user) {
    userName = user.displayName;
  }

  return (
    <div>
      <h2 className="welcome">Welcome back, {userName.split(' ')[0]}!</h2>
      <DashboardQuotes />
      <h2 className="welcome">Your Spendable Money</h2>
      <DashboardGraphs className='graphs-container' budgets={budgets} />
    </div>
  );
};


module.exports = Dashboard;
