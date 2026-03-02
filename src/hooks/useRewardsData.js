import { useState, useEffect, useMemo } from "react";
import { fetchTransactions } from "../utils/api";
import {
  calculateRewardsByCustomerMonth,
  calculateSummaryStats,
} from "../utils/rewards";
import { LABELS } from "../constants";

/**
 * Custom hook to manage rewards data fetching, calculation, and state.
 * Returns: { rewards, summary, displaySummary, loading, error, columns }
 */
export function useRewardsData() {
  const [rewards, setRewards] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch and calculate data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchTransactions(1500);

        if (response.success) {
          const transactions = response.data;
          const customerRewards = calculateRewardsByCustomerMonth(transactions);
          setRewards(customerRewards);

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

  // Default summary for error/loading states
  const defaultSummary = {
    totalPoints: 0,
    totalTransactions: 0,
    totalSpent: 0,
    customerPoints: {},
    monthlyTotals: { December: 0, January: 0, February: 0 },
  };

  const displaySummary = summary || defaultSummary;

  // Build columns dynamically from rewards data
  const columns = useMemo(() => {
    if (!rewards.length) return [];
    const sample = rewards[0];
    const cols = [
      {
        header: LABELS.REWARDS_TABLE_HEADERS.CUSTOMER_ID,
        accessor: (r) => r.customerId,
      },
      {
        header: LABELS.REWARDS_TABLE_HEADERS.CUSTOMER_NAME,
        accessor: (r) => r.customerName,
      },
    ];

    if (sample.byMonth) {
      Object.keys(sample.byMonth).forEach((month) => {
        cols.push({
          header: LABELS.REWARDS_TABLE_HEADERS[month.toUpperCase()] || month,
          accessor: (r) => r.byMonth[month],
          className: "points",
        });
      });
    }

    cols.push({
      header: LABELS.REWARDS_TABLE_HEADERS.TOTAL_POINTS,
      accessor: (r) => r.total,
      className: "total-points",
    });

    return cols;
  }, [rewards]);

  return { rewards, summary, displaySummary, loading, error, columns };
}
