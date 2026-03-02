import React from "react";
import { LABELS } from "../constants";
import PropTypes from "prop-types";

const Header = ({ title = LABELS.APP_TITLE, subtitle = LABELS.SUBTITLE }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
