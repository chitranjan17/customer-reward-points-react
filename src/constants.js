// Centralized labels and messages used throughout the app

export const LABELS = {
  APP_TITLE: "💳 Customer Rewards Program",
  SUBTITLE: "3-Month Rewards Summary",
  LOADING: "Loading...",
  LOADING_REWARDS: "Loading rewards data...",
  FETCH_ERROR: "Failed to fetch data",
  LOAD_ERROR_PREFIX: "Error loading rewards data: ",
  FOOTER_NOTE:
    "Rewards earned based on transaction amounts over 3-month period",

  ERRORS: {
    TRANSACTION_FETCH_FAILED: "Failed to load transactions",
    CUSTOMER_SUMMARY_FAILED: "Unable to load customer summary",
  },

  TABLE_HEADERS: {
    CUSTOMER_ID: "Customer ID",
    CUSTOMER_NAME: "Customer Name",
    DECEMBER: "December",
    JANUARY: "January",
    FEBRUARY: "February",
    TOTAL_POINTS: "Total Points",
  },

  SUMMARY: {
    TOTAL_POINTS: "Total Points Earned",
    TOTAL_TRANSACTIONS: "Total Transactions",
    TOTAL_SPENT: "Total Spent",
    TOTAL_CUSTOMERS: "Total Customers",
    POINTS_BY_MONTH: "Points by Month",
    DECEMBER: "December",
    JANUARY: "January",
    FEBRUARY: "February",
  },

  // defaults for generic table component
  DEFAULT_TABLE_TITLE: "Rewards by Customer and Month",
  DEFAULT_TABLE_ITEM: "customers",
};
