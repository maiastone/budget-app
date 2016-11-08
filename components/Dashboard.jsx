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
      <h2 className="welcome"> Welcome back, {userName}!</h2>
      <DashboardQuotes />
      <p>Here are your current budgets</p>
      <DashboardGraphs budgets={budgets} />
    </div>
  );
};

module.exports = Dashboard;
