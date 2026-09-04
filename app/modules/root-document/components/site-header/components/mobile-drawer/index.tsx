import { Box, Button } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { mainNavLinks, mobileProductLinks } from "../../data";
import * as classes from "../../style";

interface MobileDrawerProps {
  isOpen: boolean;
  isLoggedIn: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const MobileDrawer = ({
  isOpen,
  isLoggedIn,
  onClose,
  onLogout,
}: MobileDrawerProps) => {
  if (!isOpen) return null;

  return (
    <Box {...classes.mobileDrawerStyle}>
      <Box style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <Box {...classes.megaMenuHeaderStyle}>Products</Box>
        {mobileProductLinks.map((prod) => {
          const IconComp = prod.Icon;
          return (
            <Link
              key={prod.label}
              to={prod.to}
              hash={prod.hash}
              {...classes.mobileSubLinkStyle}
              onClick={onClose}
            >
              <IconComp size={16} /> {prod.label}
            </Link>
          );
        })}
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginTop: "12px",
        }}
      >
        <Box {...classes.megaMenuHeaderStyle}>Navigation</Box>
        {mainNavLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            {...classes.mobileNavLinkStyle}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "16px",
          paddingTop: "16px",
          borderTop: "1px solid var(--operon-color-border-subtle)",
        }}
      >
        {isLoggedIn ? (
          <>
            <Link
              to="/studio"
              {...classes.mobileNavLinkStyle}
              onClick={onClose}
            >
              Go to Studio
            </Link>
            <Button
              variant="outline"
              onClick={onLogout}
              style={{ width: "100%" }}
            >
              Sign out
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" {...classes.mobileNavLinkStyle} onClick={onClose}>
              Sign in
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", width: "100%" }}
              onClick={onClose}
            >
              <Button style={{ width: "100%" }}>Get started free</Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};
