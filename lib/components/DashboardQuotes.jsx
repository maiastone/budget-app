import React from 'react';

const DashboardQuotes = () => {
  const randomNumber = (Math.floor(Math.random() * 10 - 1) + 1);

  const dashboardQuotes = ["It’s how you deal with  failure that determines how you achieve success. –David Feherty",
   "Frugality includes all the other virtues. –Cicero",
   "I love money. I love everything about it. I bought some pretty good stuff. Got me a $300 pair of socks. Got a fur sink. An electric dog polisher. A gasoline powered turtleneck sweater. And, of course, I bought some dumb stuff, too. –Steve Martin",
   "An investment in knowledge pays the best interest. –Benjamin Franklin",
   "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy. –Warren Buffett",
   "Too many people spend money they earned..to buy things they don’t want..to impress people that they don’t like. –Will Rogers",
   "A wise person should have money in their head, but not in their heart. –Jonathan Swift", "Wealth consists not in having great possessions, but in having few wants. –Epictetus",
   "Money often costs too much. –Ralph Waldo Emerson", "Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we’ve got 24 hours each. –Christopher Rice"];

  const dashboardQuote = dashboardQuotes[randomNumber];

  return (
    <blockquote className="quotes">
      {dashboardQuote}
    </blockquote>
  );
};

module.exports = DashboardQuotes;
