import React from "react";
import { LABELS } from "../constants";
import ErrorBadge from "./ErrorBadge";

const Header = ({ loading, error }) => {
  return (
    <header className="app-header">
      <h1>{LABELS.APP_TITLE}</h1>
      <p className="subtitle">{LABELS.SUBTITLE}</p>
      {loading && <div className="loading-badge">{LABELS.LOADING}</div>}
      {error && <ErrorBadge error={error} />}
    </header>
  );
};

export default Header;
