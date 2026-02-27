import React from "react";

const CustomerSummary = ({ summary, loading }) => {
  if (loading) {
    return null;
  }

  return (
    <div className="summary-container">
      <h2>3-Month Summary Statistics</h2>
      <div className="summary-grid">
        <div className="summary-card">
          <h3>Total Points Earned</h3>
          <p className="summary-value">
            {summary.totalPoints.toLocaleString()}
          </p>
        </div>
        <div className="summary-card">
          <h3>Total Transactions</h3>
          <p className="summary-value">{summary.totalTransactions}</p>
        </div>
        <div className="summary-card">
          <h3>Total Spent</h3>
          <p className="summary-value">
            $
            {summary.totalSpent.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="summary-card">
          <h3>Total Customers</h3>
          <p className="summary-value">
            {Object.keys(summary.customerPoints).length}
          </p>
        </div>
      </div>

      <div className="monthly-summary">
        <h3>Points by Month</h3>
        <div className="month-cards">
          <div className="month-card">
            <h4>December</h4>
            <p className="month-points">{summary.monthlyTotals.December}</p>
          </div>
          <div className="month-card">
            <h4>January</h4>
            <p className="month-points">{summary.monthlyTotals.January}</p>
          </div>
          <div className="month-card">
            <h4>February</h4>
            <p className="month-points">{summary.monthlyTotals.February}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSummary;
