import React from "react";
import { LABELS } from "../constants";

const ErrorBadge = ({ error }) => {
  if (!error) return null;

  // error may be a string or an object
  const {
    message,
    status,
    statusText,
    appCode,
    appText,
  } = typeof error === "string" ? { message: error } : error;

  return (
    <div className="error-badge">
      {status && (
        <div>
          <strong>{status}</strong> {statusText || LABELS.ERRORS.TRANSACTION_FETCH_FAILED}
        </div>
      )}
      {appCode && (
        <div>
          <strong>{appCode}</strong> {appText || LABELS.ERRORS.TRANSACTION_FETCH_FAILED}
        </div>
      )}
      <div>{message}</div>
    </div>
  );
};

export default ErrorBadge;
