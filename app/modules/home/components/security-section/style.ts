import { css } from "@morph-css/kit";

export const securitySectionStyle = css({
  width: "100%",
  backgroundColor: "var(--operon-color-background)",
  borderTop: `1px solid var(--operon-color-border)`,
  borderBottom: `1px solid var(--operon-color-border)`,
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
  backgroundColor: "var(--operon-color-border)",
  border: `1px solid var(--operon-color-border)`,
  width: "100%",
  marginTop: "36px",
});

export const securityCardStyle = css({
  padding: "20px",
  backgroundColor: "var(--operon-color-surface)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  position: "relative",
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: "var(--operon-color-background)",
  },
  "&:hover [data-icon-well]": {
    borderColor: "var(--operon-color-primary)",
    color: "var(--operon-color-primary)",
  },
});

export const securityIconWrapperStyle = css({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid var(--operon-color-border)`,
  borderRadius: "4px",
  color: "var(--operon-color-text)",
  transition: "border-color 150ms ease, color 150ms ease",
});

export const securityStatStyle = css({
  fontSize: "22px",
  fontWeight: "800",
  color: "var(--operon-color-primary)",
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
  color: "var(--operon-color-text)",
  lineHeight: 1.3,
});

export const securityCardDescStyle = css({
  fontSize: "12.5px",
  color: "var(--operon-color-text-muted)",
  lineHeight: "1.5",
});
