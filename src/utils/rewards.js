// Rewards calculation logic
// 2 points per dollar spent over $100
// 1 point per dollar spent between $50 and $100

export const calculatePointsForTransaction = (amount) => {
  if (amount < 50) {
    return 0;
  }

  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2;
    points += 50 * 1; // $50-$100 gets 1 point per dollar
  } else {
    // amount is between $50-$100
    points += (amount - 50) * 1;
  }

  return points;
};

// Calculate points grouped by customer and month
export const calculateRewardsByCustomerMonth = (transactions) => {
  const rewardsByCustomer = {};

  transactions.forEach((transaction) => {
    const { customerId, customerName, month, amount } = transaction;

    if (!rewardsByCustomer[customerId]) {
      rewardsByCustomer[customerId] = {
        customerId,
        customerName,
        byMonth: {
          December: 0,
          January: 0,
          February: 0,
        },
        total: 0,
      };
    }

    const points = calculatePointsForTransaction(amount);
    rewardsByCustomer[customerId].byMonth[month] += points;
    rewardsByCustomer[customerId].total += points;
  });

  return Object.values(rewardsByCustomer);
};

// Calculate summary statistics
export const calculateSummaryStats = (transactions) => {
  const monthlyTotals = {
    December: 0,
    January: 0,
    February: 0,
  };

  let totalPoints = 0;
  const customerPoints = {};

  transactions.forEach((transaction) => {
    const points = calculatePointsForTransaction(transaction.amount);
    monthlyTotals[transaction.month] += points;
    totalPoints += points;

    if (!customerPoints[transaction.customerId]) {
      customerPoints[transaction.customerId] = 0;
    }
    customerPoints[transaction.customerId] += points;
  });

  return {
    monthlyTotals,
    totalPoints,
    customerPoints,
    totalTransactions: transactions.length,
    totalSpent: transactions.reduce((sum, t) => sum + t.amount, 0),
  };
};
