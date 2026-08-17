import { Box } from "@operon/ui";
import { Link } from "@tanstack/react-router";
import * as classes from "../style";

export const SiteFooter = () => {
  return (
    <footer {...classes.footerContainerStyle}>
      <Box {...classes.footerInnerStyle}>
        {/* Brand & System Status */}
        <Box {...classes.footerBrandColStyle}>
          <Box {...classes.logoStyle}>
            <span {...classes.logoMarkStyle} aria-hidden>
              O
            </span>
            Operon Cloud Platform
          </Box>
          <Box style={{ fontSize: "13px", lineHeight: "1.6", maxWidth: "320px" }}>
            The API-first headless orchestrator for high-velocity engineering teams.
          </Box>
        </Box>

        {/* Column 1: Products */}
        <Box>
          <Box {...classes.footerColTitleStyle}>Products</Box>
          <ul {...classes.footerLinkListStyle}>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Compose Engine
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Codeblocks Flow
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Visual Tagging & Analytics
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Operon Studio Console
              </Link>
            </li>
          </ul>
        </Box>

        {/* Column 2: Solutions */}
        <Box>
          <Box {...classes.footerColTitleStyle}>Solutions</Box>
          <ul {...classes.footerLinkListStyle}>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Data Engineering
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Backend Automation
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                No-Code Event Tracking
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Multi-Tenant Enterprise
              </Link>
            </li>
          </ul>
        </Box>

        {/* Column 3: Resources */}
        <Box>
          <Box {...classes.footerColTitleStyle}>Resources</Box>
          <ul {...classes.footerLinkListStyle}>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                API Reference
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                Changelog
              </Link>
            </li>
            <li>
              <Link to="/studio" {...classes.footerLinkStyle}>
                System Status
              </Link>
            </li>
          </ul>
        </Box>
      </Box>

      {/* Footer Bottom Bar */}
      <Box {...classes.footerBottomStyle}>
        <div>
          &copy; {new Date().getFullYear()} Operon Cloud Inc. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link to="/studio" {...classes.footerLinkStyle}>
            Privacy Policy
          </Link>
          <Link to="/studio" {...classes.footerLinkStyle}>
            Terms of Service
          </Link>
          <Link to="/studio" {...classes.footerLinkStyle}>
            Security & Trust
          </Link>
        </div>
      </Box>
    </footer>
  );
};
