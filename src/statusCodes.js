// Common HTTP status codes and textual descriptions
// This file centralizes code-to-message mappings for use across
// API utilities and error handling logic.

export const HTTP_STATUS = {
  // Informational
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",

  // Success
  200: "OK",
  201: "Created",
  202: "Accepted",
  204: "No Content",

  // Redirection
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  304: "Not Modified",

  // Client Errors
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
  422: "Unprocessable Entity",

  // Server Errors
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};

// helper to look up message by code
export const getStatusText = (code) => HTTP_STATUS[code] || "Unknown Status";
