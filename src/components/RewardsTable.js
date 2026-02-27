import React from "react";

const RewardsTable = ({ rewards, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading rewards data...</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h2>Rewards by Customer and Month</h2>
      <table className="rewards-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>December</th>
            <th>January</th>
            <th>February</th>
            <th>Total Points</th>
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
