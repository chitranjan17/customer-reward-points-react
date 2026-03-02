import React, { useState, useMemo } from "react";
import { LABELS } from "../constants";

const RewardsTable = ({ rewards = [], loading, columns }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // columns prop should be array of { header: string, accessor: row=>value }
  const defaultColumns = [
    { header: LABELS.TABLE_HEADERS.CUSTOMER_ID, accessor: (r) => r.customerId },
    { header: LABELS.TABLE_HEADERS.CUSTOMER_NAME, accessor: (r) => r.customerName },
    { header: LABELS.TABLE_HEADERS.DECEMBER, accessor: (r) => r.byMonth?.December },
    { header: LABELS.TABLE_HEADERS.JANUARY, accessor: (r) => r.byMonth?.January },
    { header: LABELS.TABLE_HEADERS.FEBRUARY, accessor: (r) => r.byMonth?.February },
    { header: LABELS.TABLE_HEADERS.TOTAL_POINTS, accessor: (r) => r.total },
  ];

  const tableCols = columns && columns.length ? columns : defaultColumns;

  const totalItems = rewards.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Ensure current page is valid when rewards or pageSize change
  if (page > totalPages) setPage(totalPages);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return rewards.slice(start, start + pageSize);
  }, [rewards, page, pageSize]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>{LABELS.LOADING_REWARDS}</p>
      </div>
    );
  }

  const onPrev = () => setPage((p) => Math.max(1, p - 1));
  const onNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="table-container">
      <h2>Rewards by Customer and Month</h2>

      <div className="table-controls" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div>
          <label style={{ marginRight: 8 }}>Rows:</label>
          <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="pagination" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={onPrev} disabled={page === 1}>Prev</button>
          <span>
            Page {page} / {totalPages}
          </span>
          <button onClick={onNext} disabled={page === totalPages}>Next</button>
        </div>
      </div>

      <table className="rewards-table">
        <thead>
          <tr>
            {tableCols.map((col, idx) => (
              <th key={idx}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paged.map((row, rowIdx) => (
            <tr key={row.customerId || rowIdx}>
              {tableCols.map((col, cidx) => (
                <td key={cidx} className={col.className || ""}>
                  {col.accessor(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12 }}>
        <small>{totalItems} customers</small>
      </div>
    </div>
  );
};

export default RewardsTable;
