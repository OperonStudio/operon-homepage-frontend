import { css } from "@morph-css/kit";

/** Spread when a variant adds nothing, so the call site stays one expression. */
export const emptyStyle = css({});

export const layoutStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "start",
  gap: "56px",
  marginBottom: "48px",
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
    gap: "32px",
  },
});

export const leadStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const audienceStyle = css({
  fontSize: "var(--operon-font-size-sm)",
  fontWeight: "600",
  color: "var(--operon-color-text-subtle)",
});

export const nameStyle = css({
  margin: "8px 0 0",
  fontSize: "clamp(30px, 3.6vw, 44px)",
  fontWeight: "800",
  letterSpacing: "-0.04em",
  lineHeight: 1.05,
});

export const taglineStyle = css({
  margin: "10px 0 0",
  fontSize: "var(--operon-font-size-xl)",
  fontWeight: "500",
  letterSpacing: "-0.015em",
  lineHeight: 1.3,
  color: "var(--operon-color-text)",
});

export const bodyStyle = css({
  margin: "18px 0 0",
  fontSize: "var(--operon-font-size-lg)",
  lineHeight: 1.6,
  color: "var(--operon-color-text-muted)",
});

// ── The before-and-after ────────────────────────────────────────────────────

export const flowStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "26px",
  borderRadius: "24px",
});

/** On a white band the panel steps down; on the canvas it steps up. */
export const flowSunkenStyle = css({
  backgroundColor: "var(--operon-color-surface-sunken)",
});

export const flowSurfaceStyle = css({
  backgroundColor: "var(--operon-color-surface)",
});

export const flowCaptionStyle = css({
  fontSize: "var(--operon-font-size-md)",
  fontWeight: "600",
  color: "var(--operon-color-text)",
});

export const pathStyle = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "8px",
});

export const pathLabelStyle = css({
  width: "100%",
  fontSize: "var(--operon-font-size-sm)",
  color: "var(--operon-color-text-subtle)",
});

export const stepsStyle = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "6px",
  flex: 1,
  minWidth: 0,
});

export const stepStyle = css({
  padding: "7px 12px",
  borderRadius: "var(--operon-radius-full)",
  fontSize: "var(--operon-font-size-sm)",
  fontWeight: "500",
  whiteSpace: "nowrap",
  backgroundColor: "var(--operon-color-background)",
  color: "var(--operon-color-text-muted)",
});

export const stepAccentStyle = css({
  padding: "7px 12px",
  borderRadius: "var(--operon-radius-full)",
  fontSize: "var(--operon-font-size-sm)",
  fontWeight: "600",
  whiteSpace: "nowrap",
  backgroundColor: "var(--operon-color-text)",
  color: "var(--operon-color-text-inverse)",
});

export const durationStyle = css({
  fontSize: "var(--operon-font-size-md)",
  fontWeight: "600",
  color: "var(--operon-color-text-subtle)",
  whiteSpace: "nowrap",
});

export const durationAccentStyle = css({
  fontSize: "var(--operon-font-size-md)",
  fontWeight: "700",
  color: "var(--operon-color-primary)",
  whiteSpace: "nowrap",
});

// ── Capabilities ────────────────────────────────────────────────────────────

export const capabilitiesStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  alignItems: "start",
  gap: "12px",
});

/** On the canvas the tiles step up to white instead of down. */
export const featureOnCanvasStyle = css({
  backgroundColor: "var(--operon-color-surface)",
});
