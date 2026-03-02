# Customer Rewards Program

A React application that calculates and displays customer rewards based on transaction history for a 3-month period.

## Overview

This application demonstrates a rewards program where customers earn points based on their purchases:

- **2 points** for every dollar spent **over $100** in a transaction
- **1 point** for every dollar spent **between $50-$100** in a transaction
- **0 points** for purchases under $50

### Example:

- $120 purchase = 2 × $20 (over $100) + 1 × $50 (between $50-$100) = 90 points
- $75 purchase = 1 × $25 (between $50-$100) = 25 points
- $45 purchase = 0 points (under $50)

## Features

✨ **Key Features:**

- Simulated async API calls to fetch transaction data
- Calculates rewards per customer per month
- Displays monthly breakdowns and total rewards
- Summary statistics for the 3-month period
- Responsive design that works on desktop and mobile
- Loading states and error handling
- No Redux - uses React hooks and local state

## Technology Stack

- **React 19** - UI library
- **React Hooks** - State management (useState, useEffect)
- **CSS3** - Styling with flexbox and grid
- **Vanilla JavaScript** - No TypeScript

## Project Structure

```
rewards-program/
├── public/
│   └── index.html              # Main HTML entry point
├── src/
│   ├── components/
│   │   ├── RewardsTable.js      # Table showing rewards by customer/month
│   │   └── CustomerSummary.js   # Summary statistics display
│   ├── utils/
│   │   ├── api.js              # Simulated API calls
│   │   └── rewards.js          # Rewards calculation logic
│   ├── App.js                  # Main app component
│   ├── App.css                 # Main styles
│   └── index.js                # React DOM render
├── package.json
├── .gitignore
└── README.md
```

## Sample Data

The application includes transaction data for **5 customers** over a **3-month period** (December, January, February):

- John Smith
- Sarah Johnson
- Mike Williams
- Emily Davis
- Robert Brown

## Installation

1. Clone the repository:

```bash
cd rewards-program
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

```bash
npm start
```

The app will open at `http://localhost:3000`

### Production Build

```bash
npm run build
```

## How It Works

1. **Component Initialization**: The `App` component loads on mount
2. **API Call**: Simulates fetching transaction data with a 1.5-second delay
3. **Calculations**:
   - `calculatePointsForTransaction()` - Calculates points for each transaction
   - `calculateRewardsByCustomerMonth()` - Groups rewards by customer and month
   - `calculateSummaryStats()` - Generates overall statistics
4. **Display**: Shows summary cards, monthly breakdown, and detailed table

## Code Example

```javascript
// How rewards are calculated
const calculatePointsForTransaction = (amount) => {
  if (amount < 50) return 0;

  let points = 0;
  if (amount > 100) {
    points += (amount - 100) * 2; // 2 points per $ over $100
    points += 50 * 1; // 1 point per $ from $50-$100
  } else {
    points += (amount - 50) * 1; // 1 point per $ from $50-$100
  }
  return points;
};
```

## Design Highlights

- **Purple gradient background** for a modern look
- **Responsive grid layouts** that adapt to screen size
- **Smooth animations** for loading states
- **Hover effects** on interactive elements
- **Mobile-first design** with breakpoints at 768px and 480px

## Future Enhancements

- Add ability to add new transactions
- Filter and search by customer
- Export rewards data to CSV
- Date range selection
- Customer tier levels
- Filtering by transaction date range

## Notes

- This project uses no external state management (Redux, Zustand, etc.)
- All state is managed with React hooks
- API calls are simulated with setTimeout
- Data is stored in memory (resets on page reload)

## License

This project is open source and available under the MIT License.
