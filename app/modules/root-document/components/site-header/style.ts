import { css } from "@morph-css/kit";

export const headerStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
  height: "56px",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "var(--operon-color-surface)",
  borderBottom: "1px solid var(--operon-color-border)",
  position: "relative",
  "@media (max-width: 768px)": {
    padding: "0 12px",
  },
});

export const headerLeftStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "32px",
  "@media (max-width: 900px)": {
    gap: "12px",
  },
});

export const logoStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  textDecoration: "none",
  letterSpacing: "-0.01em",
  flexShrink: 0,
});

export const logoMarkStyle = css({
  width: "26px",
  height: "26px",
  borderRadius: "var(--operon-radius-sm)",
  background: "linear-gradient(135deg, #0972d3 0%, #0056a8 100%)",
  color: "#ffffff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: "800",
});

export const navListStyle = css({
  display: "none",
  alignItems: "center",
  gap: "4px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  "@media (min-width: 900px)": {
    display: "flex",
  },
});

export const navItemStyle = css({
  position: "relative",
});

export const navButtonLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  padding: "8px 12px",
  fontSize: "13px",
  fontWeight: "500",
  color: "var(--operon-color-text-muted)",
  textDecoration: "none",
  borderRadius: "var(--operon-radius-md)",
  background: "none",
  border: "none",
  cursor: "pointer",
  transition: "color 150ms ease, background-color 150ms ease",
  "&:hover": {
    color: "var(--operon-color-text)",
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
});

export const megaMenuContainerStyle = css({
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: "6px",
  backgroundColor: "var(--operon-color-surface)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-lg)",
  boxShadow: "var(--operon-shadow-xl)",
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 240px)",
  gap: "16px",
  zIndex: "var(--operon-z-dropdown)",
  animation: "operon-slide-up 150ms ease-out",
});

export const megaMenuColStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const megaMenuHeaderStyle = css({
  fontSize: "11px",
  fontWeight: "700",
  color: "var(--operon-color-primary)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  paddingBottom: "4px",
  borderBottom: "1px solid var(--operon-color-border-subtle)",
});

export const megaMenuItemStyle = css({
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
  padding: "8px",
  borderRadius: "var(--operon-radius-md)",
  textDecoration: "none",
  color: "inherit",
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
});

export const megaMenuIconStyle = css({
  color: "var(--operon-color-primary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2px",
});

export const megaMenuTextGroupStyle = css({
  display: "flex",
  flexDirection: "column",
});

export const megaMenuTitleStyle = css({
  fontSize: "13px",
  fontWeight: "600",
  color: "var(--operon-color-text)",
});

export const megaMenuDescStyle = css({
  fontSize: "11px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.3",
  marginTop: "2px",
});

export const headerRightStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexShrink: 0,
  "@media (max-width: 600px)": {
    gap: "6px",
  },
});

export const desktopAuthStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "@media (max-width: 600px)": {
    display: "none",
  },
});

export const searchTriggerStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "6px 12px",
  backgroundColor: "var(--operon-color-surface-sunken)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-full)",
  fontSize: "12px",
  color: "var(--operon-color-text-muted)",
  cursor: "pointer",
  transition: "border-color 150ms ease, background-color 150ms ease",
  "&:hover": {
    borderColor: "var(--operon-color-primary)",
    backgroundColor: "var(--operon-color-surface)",
  },
  "@media (max-width: 480px)": {
    padding: "6px 10px",
    gap: "0",
  },
});

export const searchSpanStyle = css({
  "@media (max-width: 480px)": {
    display: "none",
  },
});

export const keyhintBadgeStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "2px",
  padding: "2px 6px",
  fontSize: "10px",
  fontWeight: "600",
  backgroundColor: "var(--operon-color-surface)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-xs)",
  color: "var(--operon-color-text-subtle)",
  "@media (max-width: 540px)": {
    display: "none",
  },
});

export const linkStyle = css({
  color: "var(--operon-color-text)",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "500",
});

export const mobileMenuToggleStyle = css({
  display: "none",
  background: "none",
  border: "none",
  color: "var(--operon-color-text)",
  padding: "6px",
  cursor: "pointer",
  borderRadius: "var(--operon-radius-md)",
  "&:hover": {
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
  "@media (max-width: 899px)": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const mobileDrawerStyle = css({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  height: "calc(100vh - 56px)",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "var(--operon-color-surface)",
  zIndex: "var(--operon-z-dropdown)",
  padding: "20px 16px 40px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflowY: "auto",
  borderTop: "1px solid var(--operon-color-border)",
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
  animation: "operon-slide-up 150ms ease-out",
  "@media (min-width: 900px)": {
    display: "none",
  },
});

export const mobileNavLinkStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 14px",
  fontSize: "14px",
  fontWeight: "600",
  color: "var(--operon-color-text)",
  textDecoration: "none",
  borderRadius: "var(--operon-radius-md)",
  backgroundColor: "var(--operon-color-surface-sunken)",
  border: "1px solid var(--operon-color-border-subtle)",
});

export const mobileSubLinkStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px 14px",
  fontSize: "13px",
  fontWeight: "500",
  color: "var(--operon-color-text-muted)",
  textDecoration: "none",
  borderRadius: "var(--operon-radius-md)",
  "&:hover": {
    backgroundColor: "var(--operon-color-primary-ghost)",
    color: "var(--operon-color-text)",
  },
});
