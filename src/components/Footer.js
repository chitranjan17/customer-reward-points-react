import React from "react";

// Rich footer component with tagline, description, links, and copyright
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
          &copy; {year} {companyName || copyright}
        </p>
      )}
    </footer>
  );
};

export default Footer;
