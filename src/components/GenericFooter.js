import React from "react";

/**
 * Simple reusable footer.
 * - `description`: main text displayed above the copyright line
 * - `copyright`: company or owner name, will be prefixed with © and current year
 */
const GenericFooter = ({ description = "", copyright = "" }) => {
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

export default GenericFooter;
