import { css } from "@morph-css/kit";

export const footerContainerStyle = css({
  width: "100%",
  backgroundColor: "var(--operon-color-surface-sunken)",
  color: "var(--operon-color-text-muted)",
  fontSize: "13px",
  borderTop: "1px solid var(--operon-color-border)",
  padding: "48px 24px 32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (max-width: 600px)": {
    padding: "32px 16px 24px",
  },
});

export const logoStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  textDecoration: "none",
  letterSpacing: "-0.01em",
});

export const footerInnerStyle = css({
  width: "100%",
  maxWidth: "1200px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "32px",
  marginBottom: "40px",
  "@media (max-width: 600px)": {
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "24px",
    marginBottom: "28px",
  },
});

export const footerBrandColStyle = css({
  gridColumn: "span 2",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  "@media (max-width: 600px)": {
    gridColumn: "span 1",
  },
});

export const footerColTitleStyle = css({
  fontSize: "12px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "12px",
});

export const footerLinkListStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const footerLinkStyle = css({
  color: "var(--operon-color-text-muted)",
  textDecoration: "none",
  fontSize: "13px",
  transition: "color 150ms ease",
  "&:hover": {
    color: "var(--operon-color-primary)",
  },
});

export const footerBottomStyle = css({
  width: "100%",
  maxWidth: "1200px",
  paddingTop: "24px",
  borderTop: "1px solid var(--operon-color-border-subtle)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "12px",
  fontSize: "12px",
  color: "var(--operon-color-text-subtle)",
  "@media (max-width: 600px)": {
    flexDirection: "column-reverse",
    alignItems: "flex-start",
    gap: "12px",
  },
});
