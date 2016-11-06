// we want the user name
// we want the date
// we want to display a pie graph/bar graph for how much you have spent on x budget
// we want to display remaining $ to spend daily and monthly
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
      <div> Welcome back, {userName}!</div>
      <div>Today, you have ... to spend on ...</div>
      <div>You have this much to spend this week:</div>
      <DashboardGraphs budgets={budgets} />
    </div>
  );
};

module.exports = Dashboard;
