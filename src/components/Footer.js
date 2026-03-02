import React from "react";

// simple footer showing a description and copyright line
const Footer = ({ description = "", copyright = "" }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer">
      {description && <p>{description}</p>}
      {copyright && (
        <p style={{ marginTop: 8, fontSize: "0.9rem" }}>
          &copy; {year} {copyright}
        </p>
      )}
    </footer>
  );
};

export default Footer;
