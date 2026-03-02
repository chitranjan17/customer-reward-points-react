import React from "react";
import { LABELS } from "../constants";

const RewardsTable = ({ rewards, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>{LABELS.LOADING_REWARDS}</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h2>Rewards by Customer and Month</h2>
      <table className="rewards-table">
        <thead>
          <tr>
            <th>{LABELS.TABLE_HEADERS.CUSTOMER_ID}</th>
            <th>{LABELS.TABLE_HEADERS.CUSTOMER_NAME}</th>
            <th>{LABELS.TABLE_HEADERS.DECEMBER}</th>
            <th>{LABELS.TABLE_HEADERS.JANUARY}</th>
            <th>{LABELS.TABLE_HEADERS.FEBRUARY}</th>
            <th>{LABELS.TABLE_HEADERS.TOTAL_POINTS}</th>
          </tr>
        </thead>
        <tbody>
          {rewards.map((customer) => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.customerName}</td>
              <td className="points">{customer.byMonth.December}</td>
              <td className="points">{customer.byMonth.January}</td>
              <td className="points">{customer.byMonth.February}</td>
              <td className="total-points">{customer.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardsTable;
