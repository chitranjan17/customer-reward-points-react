import React, { useState, useMemo } from "react";
import { LABELS } from "../constants";

const GenericTable = ({
  data = [],
  loading,
  columns = [],
  title = "",
  itemName = "items",
  loadingText = LABELS.LOADING_REWARDS,
  mapper, // optional function(data) => { cols, title, itemName }
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // columns prop should be array of { header: string, accessor: row=>value }
  const fallbackColumns = [
    {
      header: LABELS.REWARDS_TABLE_HEADERS.CUSTOMER_ID,
      accessor: (r) => r.customerId,
    },
    {
      header: LABELS.REWARDS_TABLE_HEADERS.CUSTOMER_NAME,
      accessor: (r) => r.customerName,
    },
    {
      header: LABELS.REWARDS_TABLE_HEADERS.DECEMBER,
      accessor: (r) => r.byMonth?.December,
    },
    {
      header: LABELS.REWARDS_TABLE_HEADERS.JANUARY,
      accessor: (r) => r.byMonth?.January,
    },
    {
      header: LABELS.REWARDS_TABLE_HEADERS.FEBRUARY,
      accessor: (r) => r.byMonth?.February,
    },
    {
      header: LABELS.REWARDS_TABLE_HEADERS.TOTAL_POINTS,
      accessor: (r) => r.total,
    },
  ];

  // if a mapper is provided, run it to derive configuration
  let tableTitle = title;
  let tableItemName = itemName;
  let tableCols = columns && columns.length ? columns : fallbackColumns;

  if (mapper && typeof mapper === "function") {
    const mapped = mapper(data) || {};
    if (mapped.title) tableTitle = mapped.title;
    if (mapped.itemName) tableItemName = mapped.itemName;
    if (mapped.cols && mapped.cols.length) tableCols = mapped.cols;
  }

  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Ensure current page is valid when rewards or pageSize change
  if (page > totalPages) setPage(totalPages);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>{loadingText}</p>
      </div>
    );
  }

  const onPrev = () => setPage((p) => Math.max(1, p - 1));
  const onNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="table-container">
      {tableTitle && <h2>{tableTitle}</h2>}

      <div
        className="table-controls"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div>
          <label style={{ marginRight: 8 }}>Rows:</label>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div
          className="pagination"
          style={{ display: "flex", gap: 8, alignItems: "center" }}
        >
          <button onClick={onPrev} disabled={page === 1}>
            Prev
          </button>
          <span>
            Page {page} / {totalPages}
          </span>
          <button onClick={onNext} disabled={page === totalPages}>
            Next
          </button>
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

      <div
        style={{
          marginTop: 12,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 12,
        }}
      >
        <small>
          {totalItems} {tableItemName}
        </small>
      </div>
    </div>
  );
};

export default GenericTable;
