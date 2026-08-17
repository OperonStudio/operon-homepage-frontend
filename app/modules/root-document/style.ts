import { css } from "@morph-css/kit";

// ── Announcement Banner ──────────────────────────────────────────────────

export const bannerContainerStyle = css({
  position: "sticky",
  top: 0,
  zIndex: "var(--operon-z-banner)",
  width: "100%",
  backgroundColor: "#000716",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 16px",
  minHeight: "36px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  lineHeight: "1.4",
});

export const bannerContentStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "1200px",
});

export const bannerBadgeStyle = css({
  backgroundColor: "var(--operon-color-primary)",
  color: "#ffffff",
  fontSize: "10px",
  fontWeight: "700",
  padding: "2px 8px",
  borderRadius: "var(--operon-radius-full)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const bannerLinkStyle = css({
  color: "#38bdf8",
  textDecoration: "none",
  fontWeight: "600",
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const bannerDismissStyle = css({
  position: "absolute",
  right: "12px",
  background: "none",
  border: "none",
  color: "rgba(255, 255, 255, 0.6)",
  cursor: "pointer",
  padding: "4px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "var(--operon-radius-xs)",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

// ── Site Header & Navigation ──────────────────────────────────────────────

export const headerStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
  height: "56px",
  backgroundColor: "var(--operon-color-surface)",
  borderBottom: "1px solid var(--operon-color-border)",
  position: "sticky",
  top: 0,
  zIndex: "var(--operon-z-topbar)",
});

export const headerLeftStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "32px",
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

// ── Search & Auth Actions ──────────────────────────────────────────────────

export const headerRightStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
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
});

export const linkStyle = css({
  color: "var(--operon-color-text)",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "500",
});

// ── Command Palette Modal ──────────────────────────────────────────────────

export const modalOverlayStyle = css({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 7, 22, 0.55)",
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingTop: "80px",
  zIndex: "var(--operon-z-modal)",
  animation: "operon-fade-scale-in 150ms ease-out",
});

export const modalContainerStyle = css({
  width: "100%",
  maxWidth: "560px",
  backgroundColor: "var(--operon-color-surface)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-xl)",
  boxShadow: "var(--operon-shadow-xl)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

export const searchInputHeaderStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "14px 18px",
  borderBottom: "1px solid var(--operon-color-border)",
});

export const searchInputStyle = css({
  flex: 1,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontSize: "14px",
  color: "var(--operon-color-text)",
  "&::placeholder": {
    color: "var(--operon-color-text-subtle)",
  },
});

export const searchResultsListStyle = css({
  maxHeight: "320px",
  overflowY: "auto",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const searchResultItemStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "10px 14px",
  borderRadius: "var(--operon-radius-md)",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  "&:hover, &[data-active='true']": {
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
});

// ── Multi-Column Enterprise Footer ────────────────────────────────────────

export const footerContainerStyle = css({
  width: "100%",
  backgroundColor: "var(--operon-color-surface-sunken)",
  color: "var(--operon-color-text-muted)",
  fontSize: "13px",
  borderTop: "1px solid var(--operon-color-border)",
  padding: "48px 24px 32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const footerInnerStyle = css({
  width: "100%",
  maxWidth: "1200px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "32px",
  marginBottom: "40px",
});

export const footerBrandColStyle = css({
  gridColumn: "span 2",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  "@media (max-width: 600px)": {
    gridColumn: "span 1",
  },
});

export const footerColTitleStyle = css({
  fontSize: "12px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "12px",
});

export const footerLinkListStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const footerLinkStyle = css({
  color: "var(--operon-color-text-muted)",
  textDecoration: "none",
  fontSize: "13px",
  transition: "color 150ms ease",
  "&:hover": {
    color: "var(--operon-color-primary)",
  },
});

export const footerBottomStyle = css({
  width: "100%",
  maxWidth: "1200px",
  paddingTop: "24px",
  borderTop: "1px solid var(--operon-color-border-subtle)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "12px",
  fontSize: "12px",
  color: "var(--operon-color-text-subtle)",
});
