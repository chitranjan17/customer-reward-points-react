import React from "react";

// Rich footer component with tagline, description, links, and copyright
const Footer = ({
  tagline = "",
  description = "",
  companyName = "",
  companyWebsite = "",
  contactEmail = "",
  copyright = "",
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer" style={{ textAlign: "center", paddingTop: 20 }}>
      {tagline && (
        <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 8 }}>
          {tagline}
        </p>
      )}

      {description && <p style={{ marginBottom: 12, opacity: 0.9 }}>{description}</p>}

      <div style={{ fontSize: "0.9rem", marginTop: 12, marginBottom: 12 }}>
        {companyWebsite && (
          <span style={{ marginRight: 16 }}>
            🌐{" "}
            <a href={companyWebsite} target="_blank" rel="noopener noreferrer">
              {companyWebsite}
            </a>
          </span>
        )}
        {contactEmail && (
          <span>
            📧{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </span>
        )}
      </div>

      {(copyright || companyName) && (
        <p style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 12, marginTop: 12 }}>
          &copy; {year} {companyName || copyright}
        </p>
      )}
    </footer>
  );
};

export default Footer;
