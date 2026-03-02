// URL for the static JSON data stored in public folder
const DATA_URL = "/data/transactions.json";

// small helper for artificial delay
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Fetch transactions from JSON file using native fetch API
export const fetchTransactions = async (delay = 1500) => {
  // simulate latency
  if (delay > 0) await wait(delay);

  const response = await fetch(DATA_URL);
  if (!response.ok) {
    return { success: false, error: "Failed to load transactions" };
  }

  const data = await response.json();
  return {
    success: true,
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
    return { success: false, error: "Unable to load customer summary" };
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
