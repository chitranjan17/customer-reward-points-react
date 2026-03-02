import { LABELS } from "../constants";

/**
 * Build column definitions specific to the rewards dataset used in this sample.
 * Returns an object with `cols`, `title` and `itemName` so it can be passed as a
 * mapper prop to GenericTable.
 */
export function rewardsMapper(data) {
  if (!data || !data.length) {
    return { cols: [], title: "", itemName: "" };
  }

  const sample = data[0];
  const cols = [
    { header: LABELS.REWARDS_TABLE_HEADERS.CUSTOMER_ID, accessor: (r) => r.customerId },
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

  return {
    cols,
    title: LABELS.DEFAULT_TABLE_TITLE,
    itemName: LABELS.DEFAULT_TABLE_ITEM,
  };
}

/**
 * Generic mapper that builds columns from object keys.  A headerMap can be
 * supplied to rename columns.
 */
export function genericMapper(data, headerMap = {}) {
  if (!data || !data.length) {
    return { cols: [], title: "", itemName: "" };
  }

  const sample = data[0];
  const cols = Object.keys(sample).map((key) => ({
    header: headerMap[key] || key,
    accessor: (r) => r[key],
  }));

  return {
    cols,
    title: "",
    itemName: "items",
  };
}
