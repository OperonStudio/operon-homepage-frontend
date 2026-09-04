import { css } from "@morph-css/kit";

export const studioContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "40px 24px 96px",
  minHeight: "calc(100vh - var(--operon-topbar-height) - 60px)",
  backgroundColor: "var(--operon-color-background)",
});

export const studioInnerStyle = css({
  width: "100%",
  maxWidth: "1160px",
});

export const studioHeaderStyle = css({
  marginBottom: "36px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const studioEyebrowStyle = css({
  fontSize: "var(--operon-font-size-sm)",
  fontWeight: "500",
  color: "var(--operon-color-text-muted)",
  marginBottom: "8px",
});

export const studioTitleStyle = css({
  fontSize: "28px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  letterSpacing: "-0.02em",
  fontFamily: "var(--operon-typography-heading)",
});

export const studioSubtitleStyle = css({
  fontSize: "14px",
  color: "var(--operon-color-text-muted)",
  marginTop: "4px",
  lineHeight: "1.5",
});

export const searchContainerStyle = css({
  position: "relative",
  width: "100%",
  maxWidth: "460px",
  marginTop: "20px",
});

export const searchInputStyle = css({
  width: "100%",
  padding: "10px 14px 10px 38px",
  fontSize: "13.5px",
  border: `1px solid var(--operon-color-border)`,
  borderRadius: "var(--operon-radius-full)",
  backgroundColor: "var(--operon-color-surface)",
  color: "var(--operon-color-text)",
  outline: "none",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
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
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "var(--operon-color-text-muted)",
  pointerEvents: "none",
});

export const studioCategoryBlockStyle = css({
  marginTop: "40px",
  "&:first-of-type": {
    marginTop: "36px",
  },
});

export const studioCategoryRailStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "16px",
});

export const studioCategoryLabelStyle = css({
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "var(--operon-color-text-muted)",
  whiteSpace: "nowrap",
});

export const studioCategoryLineStyle = css({
  flex: 1,
  height: "1px",
  backgroundColor: "var(--operon-color-border)",
});

export const studioGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "1px",
  backgroundColor: "var(--operon-color-border)",
  borderTop: `1px solid var(--operon-color-border)`,
});

export const noResultsStyle = css({
  padding: "48px 0",
  textAlign: "center",
  color: "var(--operon-color-text-muted)",
  fontSize: "14px",
});
