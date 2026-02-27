// Simulated transaction data for 3 months (December, January, February)
const transactionData = [
  // Customer 1: John Smith
  {
    id: 1,
    customerId: "C001",
    customerName: "John Smith",
    amount: 120,
    month: "December",
    date: "2025-12-05",
  },
  {
    id: 2,
    customerId: "C001",
    customerName: "John Smith",
    amount: 75,
    month: "December",
    date: "2025-12-12",
  },
  {
    id: 3,
    customerId: "C001",
    customerName: "John Smith",
    amount: 200,
    month: "December",
    date: "2025-12-20",
  },
  {
    id: 4,
    customerId: "C001",
    customerName: "John Smith",
    amount: 95,
    month: "January",
    date: "2026-01-08",
  },
  {
    id: 5,
    customerId: "C001",
    customerName: "John Smith",
    amount: 150,
    month: "January",
    date: "2026-01-15",
  },
  {
    id: 6,
    customerId: "C001",
    customerName: "John Smith",
    amount: 60,
    month: "February",
    date: "2026-02-10",
  },
  {
    id: 7,
    customerId: "C001",
    customerName: "John Smith",
    amount: 180,
    month: "February",
    date: "2026-02-18",
  },

  // Customer 2: Sarah Johnson
  {
    id: 8,
    customerId: "C002",
    customerName: "Sarah Johnson",
    amount: 110,
    month: "December",
    date: "2025-12-03",
  },
  {
    id: 9,
    customerId: "C002",
    customerName: "Sarah Johnson",
    amount: 85,
    month: "December",
    date: "2025-12-18",
  },
  {
    id: 10,
    customerId: "C002",
    customerName: "Sarah Johnson",
    amount: 250,
    month: "January",
    date: "2026-01-05",
  },
  {
    id: 11,
    customerId: "C002",
    customerName: "Sarah Johnson",
    amount: 55,
    month: "January",
    date: "2026-01-22",
  },
  {
    id: 12,
    customerId: "C002",
    customerName: "Sarah Johnson",
    amount: 175,
    month: "February",
    date: "2026-02-12",
  },

  // Customer 3: Mike Williams
  {
    id: 13,
    customerId: "C003",
    customerName: "Mike Williams",
    amount: 65,
    month: "December",
    date: "2025-12-08",
  },
  {
    id: 14,
    customerId: "C003",
    customerName: "Mike Williams",
    amount: 145,
    month: "December",
    date: "2025-12-25",
  },
  {
    id: 15,
    customerId: "C003",
    customerName: "Mike Williams",
    amount: 105,
    month: "January",
    date: "2026-01-10",
  },
  {
    id: 16,
    customerId: "C003",
    customerName: "Mike Williams",
    amount: 220,
    month: "January",
    date: "2026-01-28",
  },
  {
    id: 17,
    customerId: "C003",
    customerName: "Mike Williams",
    amount: 90,
    month: "February",
    date: "2026-02-05",
  },
  {
    id: 18,
    customerId: "C003",
    customerName: "Mike Williams",
    amount: 310,
    month: "February",
    date: "2026-02-20",
  },

  // Customer 4: Emily Davis
  {
    id: 19,
    customerId: "C004",
    customerName: "Emily Davis",
    amount: 135,
    month: "December",
    date: "2025-12-10",
  },
  {
    id: 20,
    customerId: "C004",
    customerName: "Emily Davis",
    amount: 215,
    month: "December",
    date: "2025-12-28",
  },
  {
    id: 21,
    customerId: "C004",
    customerName: "Emily Davis",
    amount: 75,
    month: "January",
    date: "2026-01-12",
  },
  {
    id: 22,
    customerId: "C004",
    customerName: "Emily Davis",
    amount: 160,
    month: "February",
    date: "2026-02-08",
  },
  {
    id: 23,
    customerId: "C004",
    customerName: "Emily Davis",
    amount: 280,
    month: "February",
    date: "2026-02-25",
  },

  // Customer 5: Robert Brown
  {
    id: 24,
    customerId: "C005",
    customerName: "Robert Brown",
    amount: 95,
    month: "December",
    date: "2025-12-06",
  },
  {
    id: 25,
    customerId: "C005",
    customerName: "Robert Brown",
    amount: 125,
    month: "December",
    date: "2025-12-22",
  },
  {
    id: 26,
    customerId: "C005",
    customerName: "Robert Brown",
    amount: 190,
    month: "January",
    date: "2026-01-18",
  },
  {
    id: 27,
    customerId: "C005",
    customerName: "Robert Brown",
    amount: 55,
    month: "January",
    date: "2026-01-30",
  },
  {
    id: 28,
    customerId: "C005",
    customerName: "Robert Brown",
    amount: 145,
    month: "February",
    date: "2026-02-14",
  },
];

// Simulate an API call with a delay
export const fetchTransactions = (delay = 1500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate a successful API response
      resolve({
        success: true,
        data: transactionData,
        timestamp: new Date().toISOString(),
      });
    }, delay);
  });
};

// Simulate fetching customer summary data
export const fetchCustomerSummary = (customerId, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const transactions = transactionData.filter(
        (t) => t.customerId === customerId,
      );
      resolve({
        success: true,
        data: {
          customerId,
          transactions,
        },
      });
    }, delay);
  });
};
