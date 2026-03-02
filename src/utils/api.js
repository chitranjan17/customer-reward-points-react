import { LABELS } from "../constants";
import { getStatusText } from "../statusCodes";

// URL for the static JSON data stored in public folder
const DATA_URL = "/data/transactions.json";

// small helper for artificial delay
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Fetch transactions from JSON file using native fetch API
export const fetchTransactions = async (delay = 1500) => {
  try {
    if (delay > 0) await wait(delay);
    const response = await fetch(DATA_URL);
    const code = response.status;
    const statusText = getStatusText(code);
    if (!response.ok) {
      return {
        success: false,
        status: code,
        statusText,
        error: LABELS.ERRORS.TRANSACTION_FETCH_FAILED,
        timestamp: new Date().toISOString(),
      };
    }

    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      return {
        success: false,
        status: code,
        statusText: "Invalid JSON",
        error: "Malformed response from server",
        timestamp: new Date().toISOString(),
      };
    }

    return {
      success: true,
      status: code,
      statusText,
      data,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      status: 0,
      statusText: "Network Error",
      error: error.message || "Unexpected error occurred",
      timestamp: new Date().toISOString(),
    };
  }
};
