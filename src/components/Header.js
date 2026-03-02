import React from "react";
import { LABELS } from "../constants";

const Header = () => {
  return (
    <header className="app-header">
      <h1>{LABELS.APP_TITLE}</h1>
      <p className="subtitle">{LABELS.SUBTITLE}</p>
    </header>
  );
};

export default Header;
