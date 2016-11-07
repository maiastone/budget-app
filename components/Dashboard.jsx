import React from 'react';
import DashboardGraphs from './DashboardGraphs'

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
      <div> Welcome back {userName}!</div>
      <div>Here are your current budgets</div>
      <DashboardGraphs budgets={budgets} />
    </div>
  );
};

module.exports = Dashboard;
