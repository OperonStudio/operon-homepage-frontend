import { css, cx } from "@morph-css/kit";

/**
 * Combine style objects for one element.
 *
 * `css()` returns `{ className }`, so spreading two of them onto the same
 * element keeps only the last one's class and silently drops the first. This
 * merges the classes instead.
 */
export const merge = (...styles: { className?: string }[]) => ({
  className: cx(...styles.map((style) => style.className)),
});

/**
 * The marketing page uses the same rule as the console: structure is expressed
 * by stepping surface tone, never by adding a border and a shadow to say the
 * same thing twice. Sections alternate between the warm canvas and white, and
 * groups inside a white section step down to the sunken tone.
 */

export const pageStyle = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "var(--operon-color-background)",
  color: "var(--operon-color-text)",
});

/** A full-bleed band. `tone` decides which surface it paints. */
export const bandStyle = css({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "96px 24px",
  "@media (max-width: 800px)": {
    padding: "64px 20px",
  },
});

export const bandSurfaceStyle = css({
  backgroundColor: "var(--operon-color-surface)",
});

export const innerStyle = css({
  width: "100%",
  maxWidth: "1120px",
});

// ── Section heading ─────────────────────────────────────────────────────────

export const sectionHeadStyle = css({
  maxWidth: "720px",
  marginBottom: "48px",
});

export const sectionTitleStyle = css({
  margin: 0,
  fontSize: "clamp(28px, 3.6vw, 40px)",
  fontWeight: "800",
  letterSpacing: "-0.035em",
  lineHeight: 1.1,
  color: "var(--operon-color-text)",
});

export const sectionBodyStyle = css({
  margin: "16px 0 0",
  fontSize: "var(--operon-font-size-lg)",
  lineHeight: 1.6,
  color: "var(--operon-color-text-muted)",
});

// ── Feature grid, shared by the platform and trust sections ─────────────────

export const featureGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  alignItems: "start",
  gap: "12px",
});

export const featureStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "22px",
  borderRadius: "20px",
  backgroundColor: "var(--operon-color-surface-sunken)",
});

export const featureIconStyle = css({
  display: "flex",
  color: "var(--operon-color-text-muted)",
});

export const featureTitleStyle = css({
  fontSize: "var(--operon-font-size-lg)",
  fontWeight: "600",
  letterSpacing: "-0.01em",
});

export const featureBodyStyle = css({
  margin: 0,
  fontSize: "var(--operon-font-size-md)",
  lineHeight: 1.55,
  color: "var(--operon-color-text-muted)",
});

// ── Buttons ─────────────────────────────────────────────────────────────────

export const ctaRowStyle = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "10px",
});

export const ctaPrimaryStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "13px 24px",
  borderRadius: "var(--operon-radius-full)",
  fontSize: "var(--operon-font-size-md)",
  fontWeight: "600",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition:
    "background-color var(--operon-motion-fast) var(--operon-motion-easing)",
  backgroundColor: "var(--operon-color-primary)",
  color: "var(--operon-color-text-inverse)",
  "&:hover": { backgroundColor: "var(--operon-color-primary-hover)" },
});

export const ctaSecondaryStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "13px 24px",
  borderRadius: "var(--operon-radius-full)",
  fontSize: "var(--operon-font-size-md)",
  fontWeight: "600",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition:
    "background-color var(--operon-motion-fast) var(--operon-motion-easing)",
  backgroundColor: "var(--operon-color-surface-sunken)",
  color: "var(--operon-color-text)",
  "&:hover": { backgroundColor: "var(--operon-color-border)" },
});
