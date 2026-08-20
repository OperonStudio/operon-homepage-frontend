import { css } from "@morph-css/kit";

export const suitePalette = {
  ink: "#0B0E14",
  line: "#E3E7EF",
  lineFaint: "#EEF1F6",
  textPrimary: "#151924",
  textMuted: "#5E6577",
  signal: "#0972D3",
  signalGhost: "#F2F8FD",
  live: "#0D9A73",
  liveGhost: "#E6F7F1",
  new: "#3D5AFE",
  newGhost: "#EBEEFF",
};

export const suiteSectionStyle = css({
  width: "100%",
  maxWidth: "1200px",
  padding: "48px 24px 80px",
});

export const sectionEyebrowStyle = css({
  fontSize: "11px",
  fontWeight: "700",
  color: "var(--operon-color-primary)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "8px",
});

export const sectionTitleStyle = css({
  fontSize: "28px",
  fontWeight: "800",
  color: "var(--operon-color-text)",
  letterSpacing: "-0.015em",
  marginBottom: "8px",
  "@media (min-width: 768px)": {
    fontSize: "32px",
  },
});

export const sectionDescStyle = css({
  fontSize: "15px",
  color: "var(--operon-color-text-muted)",
  maxWidth: "600px",
  marginBottom: "36px",
});

export const suiteCategoryBlockStyle = css({
  marginTop: "40px",
  "&:first-of-type": {
    marginTop: "36px",
  },
});

export const suiteCategoryRailStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "16px",
});

export const suiteCategoryLabelStyle = css({
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: suitePalette.textMuted,
  whiteSpace: "nowrap",
});

export const suiteCategoryLineStyle = css({
  flex: 1,
  height: "1px",
  backgroundColor: suitePalette.line,
});

export const suiteGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "1px",
  backgroundColor: suitePalette.line,
  border: `1px solid ${suitePalette.line}`,
});
