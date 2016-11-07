import React from 'react';
import DashboardGraphs from './DashboardGraphs'
import DashboardQuotes from './DashboardQuotes'

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
      <div> Welcome back, {userName}!</div>
      <DashboardQuotes />
      <div>Here are you're current budgets</div>
      <DashboardGraphs budgets={budgets} />
    </div>
  );
};

module.exports = Dashboard;
