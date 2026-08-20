import { css } from "@morph-css/kit";

export const heroLeftStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
});

export const heroTitleStyle = css({
  fontFamily: "var(--operon-typography-heading)",
  fontSize: "26px",
  fontWeight: "700",
  lineHeight: "1.18",
  letterSpacing: "-0.02em",
  color: "var(--operon-color-text)",
  marginBottom: "14px",
  "@media (min-width: 480px)": {
    fontSize: "36px",
    lineHeight: "1.15",
  },
  "@media (min-width: 768px)": {
    fontSize: "50px",
    lineHeight: "1.12",
    marginBottom: "18px",
  },
});

export const heroSubtitleStyle = css({
  fontSize: "14px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.6",
  maxWidth: "580px",
  marginBottom: "24px",
  "@media (min-width: 768px)": {
    fontSize: "16px",
    marginBottom: "32px",
  },
});

export const heroCTAContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  maxWidth: "100%",
  marginBottom: "28px",
  boxSizing: "border-box",
  "@media (min-width: 480px)": {
    flexDirection: "row",
    width: "auto",
    gap: "12px",
    marginBottom: "40px",
  },
});

export const heroCtaLinkStyle = css({
  textDecoration: "none",
  width: "100%",
  display: "block",
  boxSizing: "border-box",
  "@media (min-width: 480px)": {
    width: "auto",
    display: "inline-block",
  },
});

export const heroButtonStyle = css({
  width: "100%",
  boxSizing: "border-box",
  "@media (min-width: 480px)": {
    width: "auto",
  },
});

export const heroMetricsRowStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  paddingTop: "18px",
  borderTop: "1px solid var(--operon-color-border)",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  "@media (min-width: 576px)": {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    paddingTop: "24px",
    maxWidth: "580px",
  },
});

export const metricItemStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const metricDividerStyle = css({
  width: "1px",
  height: "32px",
  backgroundColor: "var(--operon-color-border)",
  display: "none",
  "@media (min-width: 576px)": {
    display: "block",
  },
});

export const metricValueStyle = css({
  fontSize: "16px",
  fontWeight: "800",
  color: "var(--operon-color-text)",
  letterSpacing: "-0.01em",
  fontFamily: "var(--operon-typography-mono)",
  "@media (min-width: 576px)": {
    fontSize: "20px",
  },
});

export const metricLabelStyle = css({
  fontSize: "9.5px",
  color: "var(--operon-color-text-muted)",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  lineHeight: "1.3",
  "@media (min-width: 576px)": {
    fontSize: "11px",
    letterSpacing: "0.05em",
  },
});
