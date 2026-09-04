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
  gap: "10px",
  padding: "18px",
  borderRadius: "18px",
  backgroundColor: "var(--operon-color-surface-sunken)",
  color: "inherit",
  cursor: "pointer",
  textDecoration: "none",
  height: "100%",
  boxSizing: "border-box",
  transition: "color var(--operon-motion-fast) var(--operon-motion-easing)",
  "&:hover [data-icon-well]": {
    color: "var(--operon-color-primary)",
  },
  "&:hover [data-service-name]": {
    color: "var(--operon-color-primary)",
  },
});

export const serviceIconWrapperStyle = css({
  display: "flex",
  alignItems: "center",
  color: "var(--operon-color-text-muted)",
  transition: "color var(--operon-motion-fast) var(--operon-motion-easing)",
});

export const serviceCardBodyStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const serviceNameStyle = css({
  fontSize: "var(--operon-font-size-md)",
  fontWeight: "600",
  color: "var(--operon-color-text)",
  lineHeight: 1.3,
  transition: "color var(--operon-motion-fast) var(--operon-motion-easing)",
});

export const serviceDescStyle = css({
  fontSize: "12.5px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.5",
});

export const serviceTagStyle = css({
  position: "absolute",
  top: "14px",
  right: "14px",
});
