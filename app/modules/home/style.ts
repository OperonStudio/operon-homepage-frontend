import { css } from "@morph-css/kit";

// ── Container ──────────────────────────────────────────────────────────────

export const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  backgroundColor: "var(--operon-color-background)",
});

// ── Hero ───────────────────────────────────────────────────────────────────

export const heroStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "64px 20px 40px",
  maxWidth: "780px",
});

export const heroEyebrowStyle = css({
  fontSize: "11px",
  fontWeight: "600",
  color: "var(--operon-color-primary)",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  marginBottom: "12px",
});

export const heroTitleStyle = css({
  fontSize: "40px",
  fontWeight: "700",
  lineHeight: "1.15",
  letterSpacing: "-0.02em",
  color: "var(--operon-color-text)",
  marginBottom: "16px",
  "@media (min-width: 720px)": {
    fontSize: "48px",
  },
});

export const heroSubtitleStyle = css({
  fontSize: "15px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.6",
  maxWidth: "620px",
});

export const heroCTAContainerStyle = css({
  display: "flex",
  gap: "10px",
  marginTop: "24px",
});

// ── Services Showcase ──────────────────────────────────────────────────────

export const servicesShowcaseStyle = css({
  width: "100%",
  maxWidth: "1120px",
  padding: "16px 24px 56px",
});

export const showcaseTitleStyle = css({
  fontSize: "11px",
  fontWeight: "600",
  color: "var(--operon-color-text-subtle)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "12px",
});

export const showcaseGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "8px",
  width: "100%",
});

export const showcaseCardStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 14px",
  backgroundColor: "var(--operon-color-surface)",
  borderRadius: "var(--operon-radius-md)",
  border: "1px solid var(--operon-color-border)",
  transition:
    "border-color var(--operon-motion-fast) var(--operon-motion-easing), background-color var(--operon-motion-fast) var(--operon-motion-easing)",
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    borderColor: "var(--operon-color-primary)",
    backgroundColor: "var(--operon-color-primary-ghost)",
  },
});

export const showcaseIconStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "18px",
  height: "18px",
  flexShrink: 0,
  color: "var(--operon-color-text-muted)",
});

export const showcaseCardNameStyle = css({
  fontSize: "13px",
  fontWeight: "600",
  color: "var(--operon-color-text)",
  lineHeight: 1.3,
});

export const showcaseCardDescStyle = css({
  fontSize: "12px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.4",
  marginTop: "2px",
});

export const showcaseInfoStyle = css({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
});

// ── Product Sections ───────────────────────────────────────────────────────

export const productsContainerStyle = css({
  width: "100%",
  maxWidth: "1120px",
  padding: "16px 24px 80px",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
});

export const productSectionStyle = css({
  display: "flex",
  gap: "32px",
  alignItems: "flex-start",
  flexWrap: "wrap",
  padding: "24px",
  backgroundColor: "var(--operon-color-surface)",
  border: "1px solid var(--operon-color-border)",
  borderRadius: "var(--operon-radius-lg)",
});

export const productInfoStyle = css({
  flex: 1,
  minWidth: "300px",
});

export const productLabelStyle = css({
  fontSize: "11px",
  fontWeight: "600",
  color: "var(--operon-color-primary)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "8px",
});

export const productTitleStyle = css({
  fontSize: "22px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  letterSpacing: "-0.01em",
  marginBottom: "8px",
});

export const productDescStyle = css({
  fontSize: "14px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.55",
});

export const productFeaturesStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "16px",
});

export const productFeatureStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "13px",
  color: "var(--operon-color-text)",
});

export const featureCheckStyle = css({
  width: "14px",
  height: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "var(--operon-color-success)",
});
