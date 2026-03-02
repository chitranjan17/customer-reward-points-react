import React from "react";
import { LABELS } from "../constants";

const CustomerSummary = ({ summary, loading }) => {
  if (loading) {
    return null;
  }

  return (
    <div className="summary-container">
      <h2>{LABELS.SUBTITLE} Statistics</h2>
      <div className="summary-grid">
        <div className="summary-card">
          <h3>{LABELS.SUMMARY.TOTAL_POINTS}</h3>
          <p className="summary-value">
            {summary.totalPoints.toLocaleString()}
          </p>
        </div>
        <div className="summary-card">
          <h3>{LABELS.SUMMARY.TOTAL_TRANSACTIONS}</h3>
          <p className="summary-value">{summary.totalTransactions}</p>
        </div>
        <div className="summary-card">
          <h3>{LABELS.SUMMARY.TOTAL_SPENT}</h3>
          <p className="summary-value">
            $
            {summary.totalSpent.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="summary-card">
          <h3>{LABELS.SUMMARY.TOTAL_CUSTOMERS}</h3>
          <p className="summary-value">
            {Object.keys(summary.customerPoints).length}
          </p>
        </div>
      </div>

      <div className="monthly-summary">
        <h3>{LABELS.SUMMARY.POINTS_BY_MONTH}</h3>
        <div className="month-cards">
          <div className="month-card">
            <h4>{LABELS.SUMMARY.DECEMBER}</h4>
            <p className="month-points">{summary.monthlyTotals.December}</p>
          </div>
          <div className="month-card">
            <h4>{LABELS.SUMMARY.JANUARY}</h4>
            <p className="month-points">{summary.monthlyTotals.January}</p>
          </div>
          <div className="month-card">
            <h4>{LABELS.SUMMARY.FEBRUARY}</h4>
            <p className="month-points">{summary.monthlyTotals.February}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSummary;
