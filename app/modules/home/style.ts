import { css } from "@morph-css/kit";

// ── Root Home Container ──────────────────────────────────────────────────

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  backgroundColor: "var(--operon-color-background)",
  color: "var(--operon-color-text)",
});

// ── Cloud Hero Section ─────────────────────────────────────────────────────

export const heroSectionStyle = css({
  width: "100%",
  backgroundColor: "var(--operon-color-background)",
  color: "var(--operon-color-text)",
  padding: "72px 24px 88px",
  display: "flex",
  justifyContent: "center",
  borderBottom: "1px solid var(--operon-color-border)",
  position: "relative",
  overflow: "hidden",
});

export const heroGridOverlayStyle = css({
  position: "absolute",
  inset: 0,
  backgroundImage:
    "radial-gradient(var(--operon-color-border-subtle) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  opacity: 0.6,
  pointerEvents: "none",
});

export const heroInnerStyle = css({
  width: "100%",
  maxWidth: "1200px",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "48px",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  "@media (min-width: 992px)": {
    gridTemplateColumns: "1.05fr 0.95fr",
  },
});

export const heroLeftStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const heroTitleStyle = css({
  fontFamily: "var(--operon-typography-heading)",
  fontSize: "36px",
  fontWeight: "700",
  lineHeight: "1.12",
  letterSpacing: "-0.02em",
  color: "var(--operon-color-text)",
  marginBottom: "18px",
  "@media (min-width: 768px)": {
    fontSize: "50px",
  },
});

export const heroSubtitleStyle = css({
  fontSize: "16px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.6",
  maxWidth: "580px",
  marginBottom: "32px",
});

export const heroCTAContainerStyle = css({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginBottom: "44px",
});

export const heroMetricsRowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingTop: "24px",
  borderTop: "1px solid var(--operon-color-border)",
  width: "100%",
  maxWidth: "580px",
  flexWrap: "wrap",
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
  "@media (max-width: 480px)": {
    display: "none",
  },
});

export const metricValueStyle = css({
  fontSize: "20px",
  fontWeight: "800",
  color: "var(--operon-color-text)",
  letterSpacing: "-0.01em",
  fontFamily: "var(--operon-typography-mono)",
});

export const metricLabelStyle = css({
  fontSize: "11px",
  color: "var(--operon-color-text-muted)",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

// ── Right Column: Signal Route Panel ───────────────────────────────────────

export const signalPanelStyle = css({
  width: "100%",
  backgroundColor: "var(--operon-color-surface)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-lg)",
  boxShadow: "var(--operon-shadow-lg)",
  padding: "22px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  position: "relative",
  zIndex: 1,
});

export const panelHeaderStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
  paddingBottom: "16px",
  borderBottom: "1px solid var(--operon-color-border)",
});

export const panelHeaderLabelStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--operon-color-text-muted)",
});

export const segmentedControlStyle = css({
  display: "flex",
  gap: "2px",
  padding: "2px",
  backgroundColor: "var(--operon-color-surface-sunken)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-md)",
});

export const segmentButtonStyle = css({
  padding: "7px 12px",
  borderRadius: "var(--operon-radius-sm)",
  border: "none",
  backgroundColor: "transparent",
  color: "var(--operon-color-text-muted)",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  cursor: "pointer",
  transition: "color 150ms ease, background-color 150ms ease",
  "&:hover": {
    color: "var(--operon-color-text)",
  },
  "&:focus-visible": {
    outline: "2px solid var(--operon-color-primary)",
    outlineOffset: "2px",
  },
  "&[data-active='true']": {
    backgroundColor: "var(--operon-color-primary-ghost)",
    color: "var(--operon-color-primary)",
    boxShadow: "inset 0 0 0 1px var(--operon-color-primary)",
  },
});

// Routing diagram

export const routeDiagramStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  paddingBottom: "18px",
  borderBottom: "1px solid var(--operon-color-border)",
});

export const laneRowStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "14px",
});

export const laneLabelStyle = css({
  width: "84px",
  flexShrink: 0,
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "10px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "var(--operon-color-text-subtle)",
  "&[data-variant='live']": {
    color: "var(--operon-color-success)",
  },
});

export const laneTrackStyle = css({
  flex: 1,
  display: "flex",
  alignItems: "center",
  minWidth: 0,
});

export const laneNodeStyle = css({
  padding: "5px 9px",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "600",
  whiteSpace: "nowrap",
  borderRadius: "var(--operon-radius-xs)",
  border: "1px solid var(--operon-color-border)",
  color: "var(--operon-color-text-subtle)",
  backgroundColor: "transparent",
  "&[data-variant='live']": {
    borderColor: "var(--operon-color-primary)",
    color: "var(--operon-color-primary)",
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
});

export const laneConnectorStyle = css({
  flex: 1,
  height: 0,
  borderTop: "1px dashed var(--operon-color-border)",
  margin: "0 -1px",
  "&[data-variant='live']": {
    borderTop: "1px solid var(--operon-color-primary)",
  },
});

export const laneDurationStyle = css({
  width: "60px",
  flexShrink: 0,
  textAlign: "right",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "700",
  color: "var(--operon-color-text-subtle)",
  "&[data-variant='live']": {
    color: "var(--operon-color-success)",
  },
});

// Live readout

export const readoutPanelStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const readoutTopRowStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
});

export const statusTagStyle = css({
  display: "inline-flex",
  alignItems: "center",
  padding: "4px 10px 4px 8px",
  borderLeft: "3px solid var(--operon-color-text-subtle)",
  backgroundColor: "var(--operon-color-surface-sunken)",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "11px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  color: "var(--operon-color-text-muted)",
  "&[data-variant='live']": {
    borderLeftColor: "var(--operon-color-success)",
    color: "var(--operon-color-success)",
  },
});

export const tagToggleStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "5px 10px",
  borderRadius: "var(--operon-radius-xs)",
  border: "1px solid var(--operon-color-border)",
  backgroundColor: "transparent",
  color: "var(--operon-color-text-muted)",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "10.5px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  cursor: "pointer",
  transition: "all 150ms ease",
  "&:focus-visible": {
    outline: "2px solid var(--operon-color-primary)",
    outlineOffset: "2px",
  },
  "&[data-active='true']": {
    borderColor: "var(--operon-color-success)",
    color: "var(--operon-color-success)",
    backgroundColor: "var(--operon-color-success-ghost)",
  },
});

export const readoutHeadlineStyle = css({
  fontSize: "17px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  lineHeight: "1.35",
});

export const readoutDescStyle = css({
  fontSize: "12.5px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.55",
});

export const instrumentationTagStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "6px 10px",
  backgroundColor: "var(--operon-color-success-ghost)",
  border: "1px solid var(--operon-color-success)",
  borderRadius: "var(--operon-radius-xs)",
  fontFamily: "var(--operon-typography-mono)",
  fontSize: "10.5px",
  fontWeight: "700",
  color: "var(--operon-color-success)",
  width: "fit-content",
});

export const inlineCodeStyle = css({
  fontFamily: "var(--operon-typography-mono)",
  backgroundColor: "var(--operon-color-surface-sunken)",
  padding: "1px 5px",
  borderRadius: "var(--operon-radius-xs)",
  color: "var(--operon-color-text)",
  fontSize: "10.5px",
});

// ── Sticky Sub-Navigation Strip ────────────────────────────────────────────

export const subNavContainerStyle = css({
  position: "sticky",
  top: "56px",
  zIndex: "var(--operon-z-docked)",
  width: "100%",
  backgroundColor: "var(--operon-color-surface)",
  borderBottom: "1px solid var(--operon-color-border)",
  display: "flex",
  justifyContent: "center",
  padding: "0 24px",
  boxShadow: "var(--operon-shadow-xs)",
});

export const subNavInnerStyle = css({
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  overflowX: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const subNavTabStyle = css({
  padding: "14px 18px",
  fontSize: "13px",
  fontWeight: "600",
  color: "var(--operon-color-text-muted)",
  background: "none",
  border: "none",
  borderBottom: "2px solid transparent",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "color 150ms ease, border-color 150ms ease",
  "&:hover": {
    color: "var(--operon-color-text)",
  },
  "&[aria-current='true']": {
    color: "var(--operon-color-primary)",
    borderBottomColor: "var(--operon-color-primary)",
  },
});

// ── "What's New on Operon" Featured News Section ──────────────────────────

export const whatsNewSectionStyle = css({
  width: "100%",
  maxWidth: "1200px",
  padding: "72px 24px 64px",
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

export const newsGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "24px",
  width: "100%",
});

export const newsCardStyle = css({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "var(--operon-color-surface)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-lg)",
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
  transition:
    "transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "var(--operon-color-primary)",
    boxShadow: "var(--operon-shadow-lg)",
  },
});

export const newsCardBannerStyle = css({
  height: "140px",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  padding: "16px",
  position: "relative",
});

export const newsCardBodyStyle = css({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const newsCardTitleStyle = css({
  fontSize: "17px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  lineHeight: "1.3",
  marginBottom: "8px",
});

export const newsCardDescStyle = css({
  fontSize: "13px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.55",
  marginBottom: "16px",
  flex: 1,
});

export const newsCardLinkStyle = css({
  fontSize: "12px",
  fontWeight: "700",
  color: "var(--operon-color-primary)",
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
});

// ── Operon Cloud Suite 12-Service Grid ─────────────────────────────────────

const suitePalette = {
  ink: "#0B0E14",
  line: "#E3E7EF",
  lineFaint: "#EEF1F6",
  textPrimary: "#151924",
  textMuted: "#5E6577",
  signal: "#0972D3", // Operon signature blue — matching all micro-frontends
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

export const serviceCardStyle = css({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "20px",
  backgroundColor: "#ffffff",
  color: "inherit",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: suitePalette.lineFaint,
  },
  "&:hover [data-icon-well]": {
    borderColor: suitePalette.signal,
    color: suitePalette.signal,
  },
});

export const serviceIconWrapperStyle = css({
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

export const serviceCardBodyStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const serviceNameStyle = css({
  fontSize: "14.5px",
  fontWeight: "700",
  color: suitePalette.textPrimary,
  lineHeight: 1.3,
});

export const serviceDescStyle = css({
  fontSize: "12.5px",
  color: suitePalette.textMuted,
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
  "&[data-tag='core']": {
    color: suitePalette.textMuted,
    backgroundColor: suitePalette.lineFaint,
  },
  "&[data-tag='popular']": {
    color: suitePalette.signal,
    backgroundColor: suitePalette.signalGhost,
  },
  "&[data-tag='new']": {
    color: suitePalette.new,
    backgroundColor: suitePalette.newGhost,
  },
});

// ── Enterprise Security Section ───────────────────────────────────────────

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
