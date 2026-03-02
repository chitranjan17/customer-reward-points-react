import { LABELS } from "../constants";
import { getStatusText } from "../statusCodes";

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
