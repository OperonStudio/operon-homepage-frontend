import { css } from "@morph-css/kit";

export const studioContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "32px 24px 80px",
  minHeight: "calc(100vh - var(--operon-topbar-height) - 60px)",
  backgroundColor: "var(--operon-color-background)",
});

export const studioInnerStyle = css({
  width: "100%",
  maxWidth: "1120px",
});

export const studioHeaderStyle = css({
  marginBottom: "32px",
});

export const studioTitleStyle = css({
  fontSize: "24px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  letterSpacing: "-0.015em",
});

export const studioSubtitleStyle = css({
  fontSize: "13px",
  color: "var(--operon-color-text-muted)",
  marginTop: "4px",
});

export const searchContainerStyle = css({
  position: "relative",
  width: "100%",
  maxWidth: "420px",
  marginTop: "16px",
});

export const searchInputStyle = css({
  width: "100%",
  padding: "8px 12px 8px 34px",
  fontSize: "13px",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-md)",
  backgroundColor: "var(--operon-color-surface)",
  color: "var(--operon-color-text)",
  outline: "none",
  transition:
    "border-color var(--operon-motion-fast) var(--operon-motion-easing), box-shadow var(--operon-motion-fast) var(--operon-motion-easing)",
  "&:focus": {
    borderColor: "var(--operon-color-primary)",
    boxShadow: "var(--operon-shadow-focus)",
  },
  "&::placeholder": {
    color: "var(--operon-color-text-muted)",
  },
});

export const searchIconStyle = css({
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "var(--operon-color-text-muted)",
  pointerEvents: "none",
});

export const categorySectionStyle = css({
  marginBottom: "28px",
});

export const categoryHeaderStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "10px",
  paddingBottom: "8px",
  borderBottom: "1px solid var(--operon-color-border-subtle)",
});

export const categoryTitleStyle = css({
  fontSize: "11px",
  fontWeight: "600",
  color: "var(--operon-color-text-subtle)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
});

export const servicesGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "8px",
  width: "100%",
});

export const serviceLinkStyle = css({
  textDecoration: "none",
  color: "inherit",
  display: "block",
});

export const serviceCardStyle = css({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  padding: "12px 14px",
  backgroundColor: "var(--operon-color-surface)",
  borderRadius: "var(--operon-radius-md)",
  border: "1px solid var(--operon-color-border)",
  transition:
    "border-color var(--operon-motion-fast) var(--operon-motion-easing), background-color var(--operon-motion-fast) var(--operon-motion-easing)",
  cursor: "pointer",
  "&:hover": {
    borderColor: "var(--operon-color-primary)",
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
});

export const serviceIconStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "18px",
  height: "18px",
  flexShrink: 0,
  color: "var(--operon-color-text-muted)",
  marginTop: "2px",
});

export const serviceInfoStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  minWidth: 0,
});

export const serviceTitleStyle = css({
  fontSize: "13px",
  fontWeight: "600",
  color: "var(--operon-color-text)",
  lineHeight: 1.3,
});

export const serviceDescStyle = css({
  fontSize: "12px",
  color: "var(--operon-color-text-muted)",
  lineHeight: 1.4,
});

export const noResultsStyle = css({
  padding: "32px 0",
  textAlign: "center",
  color: "var(--operon-color-text-muted)",
  fontSize: "13px",
});
