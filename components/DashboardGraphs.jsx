import React from 'react';

const DashboardGraphs = (props) => {
  const {budgets} = props;


  return (
    <div>
      <svg width="600" height="40" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
           <g>
             <rect fill="#D0011B" x="0" y="0" width="250" height="40" />
             <rect fill="#50E3C2" x="300" y="0" width="350" height="40" />
           </g>
         </svg>
    </div>

  );
};

module.exports = DashboardGraphs;
