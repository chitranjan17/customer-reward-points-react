import React, { useState, useEffect } from "react";
import "./App.css";
import RewardsTable from "./components/RewardsTable";
import CustomerSummary from "./components/CustomerSummary";
import { fetchTransactions } from "./utils/api";
import {
  calculateRewardsByCustomerMonth,
  calculateSummaryStats,
} from "./utils/rewards";
import { LABELS } from "./constants";

function App() {
  const [rewards, setRewards] = useState([]);
  const [summary, setSummary] = useState(null);
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

          // Calculate rewards
          const customerRewards = calculateRewardsByCustomerMonth(transactions);
          setRewards(customerRewards);

          // Calculate summary
          const stats = calculateSummaryStats(transactions);
          setSummary(stats);
        } else {
          setError(LABELS.FETCH_ERROR);
        }
      } catch (err) {
        setError(LABELS.LOAD_ERROR_PREFIX + err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1>{LABELS.APP_TITLE}</h1>
        <p className="subtitle">{LABELS.SUBTITLE}</p>
        {loading && <div className="loading-badge">{LABELS.LOADING}</div>}
        {error && <div className="error-badge">{error}</div>}
      </header>

      <main className="app-main">
        {summary && <CustomerSummary summary={summary} loading={loading} />}

        <RewardsTable rewards={rewards} loading={loading} />
      </main>

      <footer className="app-footer">
        <p>{LABELS.FOOTER_NOTE}</p>
      </footer>
    </div>
  );
}

export default App;
