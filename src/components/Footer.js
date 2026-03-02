import React from "react";
import { LABELS } from "../constants";

const Footer = ({ summary, lastUpdated }) => {
  const totalPoints = summary ? summary.totalPoints.toLocaleString() : null;
  const totalCustomers = summary
    ? Object.keys(summary.customerPoints).length
    : null;

  return (
    <footer className="app-footer">
      <p>{LABELS.FOOTER_NOTE}</p>
      <div className="footer-meta" style={{ marginTop: 8, fontSize: "0.9rem" }}>
        {summary && (
          <span>
            {LABELS.SUMMARY.TOTAL_POINTS}: {totalPoints}
          </span>
        )}
        {summary && (
          <span style={{ marginLeft: 12 }}>
            {LABELS.SUMMARY.TOTAL_CUSTOMERS}: {totalCustomers}
          </span>
        )}
        {lastUpdated && (
          <span style={{ marginLeft: 12 }}>
            Last updated: {new Date(lastUpdated).toLocaleString()}
          </span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
