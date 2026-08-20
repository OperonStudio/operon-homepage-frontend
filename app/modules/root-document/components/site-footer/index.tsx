import { Box } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { footerColumns, footerLegalLinks } from "./data";
import * as classes from "./style";

export const SiteFooter = () => {
  return (
    <footer {...classes.footerContainerStyle}>
      <Box {...classes.footerInnerStyle}>
        {/* Brand & System Status */}
        <Box {...classes.footerBrandColStyle}>
          <Box {...classes.logoStyle}>
            <img
              src="/operon-lockup.svg"
              alt="Operon"
              height="24"
              style={{ display: "block" }}
            />
          </Box>

          <Box
            style={{
              fontSize: "13px",
              lineHeight: "1.6",
              maxWidth: "320px",
            }}
          >
            The API-first headless orchestrator for high-velocity engineering
            teams.
          </Box>
        </Box>

        {/* Footer Columns */}
        {footerColumns.map((column) => (
          <Box key={column.title}>
            <Box {...classes.footerColTitleStyle}>{column.title}</Box>

            <ul {...classes.footerLinkListStyle}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} {...classes.footerLinkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>

      {/* Footer Bottom Bar */}
      <Box {...classes.footerBottomStyle}>
        <div>
          &copy; {new Date().getFullYear()} Operon Studio Inc. All rights
          reserved.
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {footerLegalLinks.map((link) => (
            <Link key={link.label} to={link.to} {...classes.footerLinkStyle}>
              {link.label}
            </Link>
          ))}
        </div>
      </Box>
    </footer>
  );
};
