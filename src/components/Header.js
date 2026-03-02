import React from "react";
import { LABELS } from "../constants";

const Header = ({ title = LABELS.APP_TITLE, subtitle = LABELS.SUBTITLE }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </header>
  );
};

export default Header;
