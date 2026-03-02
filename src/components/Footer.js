import React from "react";
import PropTypes from "prop-types";
// Rich footer component with description, links, and copyright
const Footer = ({
  description = "",
  companyName = "",
  companyWebsite = "",
  contactEmail = "",
  copyright = "",
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      {description && <p className="footer-description">{description}</p>}

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
  description: PropTypes.string,
  companyName: PropTypes.string,
  companyWebsite: PropTypes.string,
  contactEmail: PropTypes.string,
  copyright: PropTypes.string,
};

Footer.defaultProps = {
  description: "",
  companyName: "",
  companyWebsite: "",
  contactEmail: "",
  copyright: "",
};

export default Footer;
