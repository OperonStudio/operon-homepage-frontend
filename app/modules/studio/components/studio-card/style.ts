import { css } from "@morph-css/kit";

export const serviceLinkStyle = css({
  textDecoration: "none",
  color: "inherit",
  display: "block",
  height: "100%",
});

export const serviceCardStyle = css({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "20px",
  backgroundColor: "var(--operon-color-surface)",
  color: "inherit",
  cursor: "pointer",
  textDecoration: "none",
  height: "100%",
  boxSizing: "border-box",
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: "var(--operon-color-background)",
  },
  "&:hover [data-icon-well]": {
    color: "var(--operon-color-primary)",
  },
});

export const serviceIconWrapperStyle = css({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--operon-color-text-muted)",
  transition: "color 150ms ease",
});

export const serviceCardBodyStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const serviceNameStyle = css({
  fontSize: "14.5px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  lineHeight: 1.3,
});

export const serviceDescStyle = css({
  fontSize: "12.5px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.5",
});

export const serviceTagStyle = css({
  position: "absolute",
  top: "16px",
  right: "16px",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "9.5px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  padding: "2px 7px",
  borderRadius: "3px",
});
