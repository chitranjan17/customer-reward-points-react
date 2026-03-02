import React from "react";
import { LABELS } from "../constants";

const Header = ({ loading }) => {
  return (
    <header className="app-header">
      <h1>{LABELS.APP_TITLE}</h1>
      <p className="subtitle">{LABELS.SUBTITLE}</p>
      {loading && <div className="loading-badge">{LABELS.LOADING}</div>}
    </header>
  );
};

export default Header;
