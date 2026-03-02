import React, { useState, useEffect } from "react";
import "./App.css";
import RewardsTable from "./components/RewardsTable";
import CustomerSummary from "./components/CustomerSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchTransactions } from "./utils/api";
import {
  calculateRewardsByCustomerMonth,
  calculateSummaryStats,
} from "./utils/rewards";
import { LABELS } from "./constants";

function App() {
  const [rewards, setRewards] = useState([]);
  const [summary, setSummary] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data on component mount
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate async API call
        const response = await fetchTransactions(1500);

        if (response.success) {
          const transactions = response.data;

          // record API timestamp
          if (response.timestamp) setLastUpdated(response.timestamp);

          // Calculate rewards
          const customerRewards = calculateRewardsByCustomerMonth(transactions);
          setRewards(customerRewards);

          // Calculate summary
          const stats = calculateSummaryStats(transactions);
          setSummary(stats);
        } else {
          setError({
            message: response.error,
            status: response.status,
            statusText: response.statusText,
            appCode: response.appCode,
            appText: response.appText,
          });
        }
      } catch (err) {
        setError({ message: LABELS.LOAD_ERROR_PREFIX + err.message });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // build columns dynamically based on rewards data (falls back inside component if no columns prop)
  const columns = React.useMemo(() => {
    if (!rewards.length) return [];
    const sample = rewards[0];
    const cols = [
      { header: LABELS.TABLE_HEADERS.CUSTOMER_ID, accessor: (r) => r.customerId },
      { header: LABELS.TABLE_HEADERS.CUSTOMER_NAME, accessor: (r) => r.customerName },
    ];
    // any byMonth keys
    if (sample.byMonth) {
      Object.keys(sample.byMonth).forEach((month) => {
        cols.push({
          header: LABELS.TABLE_HEADERS[month.toUpperCase()] || month,
          accessor: (r) => r.byMonth[month],
          className: "points",
        });
      });
    }
    cols.push({
      header: LABELS.TABLE_HEADERS.TOTAL_POINTS,
      accessor: (r) => r.total,
      className: "total-points",
    });
    return cols;
  }, [rewards]);

  return (
    <div className="App">
      <Header loading={loading} error={error} />

      <main className="app-main">
        {summary && <CustomerSummary summary={summary} loading={loading} />}

        <RewardsTable rewards={rewards} loading={loading} columns={columns} />
      </main>

      <Footer summary={summary} lastUpdated={lastUpdated} />
    </div>
  );
}

export default App;
