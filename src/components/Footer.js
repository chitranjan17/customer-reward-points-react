import React from "react";
import PropTypes from "prop-types";
// Rich footer component with description, links, and copyright
const Footer = ({
  companyName = "",
  companyWebsite = "",
  contactEmail = "",
  copyright = "",
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-links">
        {companyWebsite && (
          <span className="footer-link-item">
            🌐{" "}
            <a href={companyWebsite} target="_blank" rel="noopener noreferrer">
              {companyWebsite}
            </a>
          </span>
        )}
        {contactEmail && (
          <span className="footer-link-item">
            📧 <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </span>
        )}
      </div>

      {(copyright || companyName) && (
        <p className="footer-copyright">
          <sup>&copy;</sup> {year} {companyName || copyright}
        </p>
      )}
    </footer>
  );
};

Footer.propTypes = {
  companyName: PropTypes.string.isRequired,
  companyWebsite: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  copyright: PropTypes.string,
};

export default Footer;
