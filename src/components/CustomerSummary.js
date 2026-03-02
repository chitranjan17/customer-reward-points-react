import React, { useState } from "react";
import { LABELS } from "../constants";

const CustomerSummary = ({ summary, loading }) => {
  const [open, setOpen] = useState(true);

  if (loading) return null;

  const toggle = () => setOpen((v) => !v);

  return (
    <div className="summary-container">
      <div className="accordion-header">
        <h2 style={{ margin: 0 }}>{LABELS.SUBTITLE} Statistics</h2>
        <button
          aria-expanded={open}
          className="accordion-toggle"
          onClick={toggle}
          style={{ marginLeft: 12 }}
        >
          {open ? "Collapse" : "Expand"}
        </button>
      </div>

      <div className={`accordion-content ${open ? "open" : "closed"}`}>
        <div className="summary-grid">
          <div className="summary-card">
            <h3>{LABELS.REWARDS_SUMMARY.TOTAL_POINTS}</h3>
            <p className="summary-value">
              {summary.totalPoints.toLocaleString()}
            </p>
          </div>
          <div className="summary-card">
            <h3>{LABELS.REWARDS_SUMMARY.TOTAL_TRANSACTIONS}</h3>
            <p className="summary-value">{summary.totalTransactions}</p>
          </div>
          <div className="summary-card">
            <h3>{LABELS.REWARDS_SUMMARY.TOTAL_SPENT}</h3>
            <p className="summary-value">
              ${" "}
              {summary.totalSpent.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="summary-card">
            <h3>{LABELS.REWARDS_SUMMARY.TOTAL_CUSTOMERS}</h3>
            <p className="summary-value">
              {Object.keys(summary.customerPoints).length}
            </p>
          </div>
        </div>

        <div className="monthly-summary" style={{ marginTop: 20 }}>
          <h3>{LABELS.REWARDS_SUMMARY.POINTS_BY_MONTH}</h3>
          <div className="month-cards">
            <div className="month-card">
              <h4>{LABELS.REWARDS_SUMMARY.DECEMBER}</h4>
              <p className="month-points">{summary.monthlyTotals.December}</p>
            </div>
            <div className="month-card">
              <h4>{LABELS.REWARDS_SUMMARY.JANUARY}</h4>
              <p className="month-points">{summary.monthlyTotals.January}</p>
            </div>
            <div className="month-card">
              <h4>{LABELS.REWARDS_SUMMARY.FEBRUARY}</h4>
              <p className="month-points">{summary.monthlyTotals.February}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSummary;
