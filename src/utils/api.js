import { LABELS } from "../constants";
import { HTTP_STATUS, getStatusText } from "../statusCodes";

// URL for the static JSON data stored in public folder
const DATA_URL = "/data/transactions.json";

// small helper for artificial delay
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Fetch transactions from JSON file using native fetch API
export const fetchTransactions = async (delay = 1500) => {
  // simulate latency
  if (delay > 0) await wait(delay);

  const response = await fetch(DATA_URL);

  // include status code and description in return object
  const code = response.status;
  const statusText = getStatusText(code);

  if (!response.ok) {
    return {
      success: false,
      status: code,
      statusText,
      error: LABELS.ERRORS.TRANSACTION_FETCH_FAILED,
    };
  }

  const data = await response.json();
  return {
    success: true,
    status: code,
    statusText,
    data,
    timestamp: new Date().toISOString(),
  };
};

// Fetch summary for a specific customer by reusing fetchTransactions
export const fetchCustomerSummary = async (customerId, delay = 1000) => {
  // delay before fetching to simulate network
  if (delay > 0) await wait(delay);

  const res = await fetchTransactions(0);
  if (!res.success) {
    return { success: false, error: LABELS.ERRORS.CUSTOMER_SUMMARY_FAILED };
  }

  const transactions = res.data.filter((t) => t.customerId === customerId);
  return {
    success: true,
    data: {
      customerId,
      transactions,
    },
  };
};
