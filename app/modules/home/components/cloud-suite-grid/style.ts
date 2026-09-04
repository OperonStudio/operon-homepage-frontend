import { css } from "@morph-css/kit";

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
  color: "var(--operon-color-text-muted)",
  whiteSpace: "nowrap",
});

export const suiteCategoryLineStyle = css({
  flex: 1,
  height: "1px",
  backgroundColor: "var(--operon-color-border)",
});

export const suiteGridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "1px",
  backgroundColor: "var(--operon-color-border)",
  border: `1px solid var(--operon-color-border)`,
});
