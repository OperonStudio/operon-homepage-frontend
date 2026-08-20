import { css } from "@morph-css/kit";

const studioPalette = {
  line: "#E3E7EF",
  textPrimary: "#151924",
  textMuted: "#5E6577",
  signal: "#0972D3",
};

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
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: studioPalette.signal,
  marginBottom: "8px",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  "&::before": {
    content: '""',
    display: "inline-block",
    width: "14px",
    height: "1px",
    backgroundColor: studioPalette.signal,
  },
});

export const studioTitleStyle = css({
  fontSize: "28px",
  fontWeight: "700",
  color: studioPalette.textPrimary,
  letterSpacing: "-0.02em",
  fontFamily: "var(--operon-typography-heading)",
});

export const studioSubtitleStyle = css({
  fontSize: "14px",
  color: studioPalette.textMuted,
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
  border: `1px solid ${studioPalette.line}`,
  borderRadius: "var(--operon-radius-lg)",
  backgroundColor: "#ffffff",
  color: studioPalette.textPrimary,
  outline: "none",
  boxShadow: "var(--operon-shadow-xs)",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  "&:focus": {
    borderColor: studioPalette.signal,
    boxShadow: "var(--operon-shadow-focus)",
  },
  "&::placeholder": {
    color: studioPalette.textMuted,
  },
});

export const searchIconStyle = css({
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  color: studioPalette.textMuted,
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
  color: studioPalette.textMuted,
  whiteSpace: "nowrap",
});

export const studioCategoryLineStyle = css({
  flex: 1,
  height: "1px",
  backgroundColor: studioPalette.line,
});

export const studioGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "1px",
  backgroundColor: studioPalette.line,
  border: `1px solid ${studioPalette.line}`,
});

export const noResultsStyle = css({
  padding: "48px 0",
  textAlign: "center",
  color: studioPalette.textMuted,
  fontSize: "14px",
});
