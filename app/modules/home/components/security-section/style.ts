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

export const securitySectionStyle = css({
  width: "100%",
  backgroundColor: suitePalette.lineFaint,
  borderTop: `1px solid ${suitePalette.line}`,
  borderBottom: `1px solid ${suitePalette.line}`,
  padding: "72px 24px 88px",
  display: "flex",
  justifyContent: "center",
});

export const securityInnerStyle = css({
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
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

export const securityGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "1px",
  backgroundColor: suitePalette.line,
  border: `1px solid ${suitePalette.line}`,
  width: "100%",
  marginTop: "36px",
});

export const securityCardStyle = css({
  padding: "20px",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  position: "relative",
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: suitePalette.lineFaint,
  },
  "&:hover [data-icon-well]": {
    borderColor: suitePalette.signal,
    color: suitePalette.signal,
  },
});

export const securityIconWrapperStyle = css({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${suitePalette.line}`,
  borderRadius: "4px",
  color: suitePalette.textPrimary,
  transition: "border-color 150ms ease, color 150ms ease",
});

export const securityStatStyle = css({
  fontSize: "22px",
  fontWeight: "800",
  color: suitePalette.signal,
  fontFamily: "var(--operon-typography-mono)",
});

export const securityCardBodyStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const securityCardTitleStyle = css({
  fontSize: "14.5px",
  fontWeight: "700",
  color: suitePalette.textPrimary,
  lineHeight: 1.3,
});

export const securityCardDescStyle = css({
  fontSize: "12.5px",
  color: suitePalette.textMuted,
  lineHeight: "1.5",
});
