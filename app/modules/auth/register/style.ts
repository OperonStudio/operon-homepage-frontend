import { css } from "@morph-css/kit";

export const authContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "calc(100vh - var(--operon-topbar-height) - 60px)",
  padding: "40px 20px",
  backgroundColor: "var(--operon-color-background)",
});

export const authCardStyle = css({
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  backgroundColor: "var(--operon-color-surface)",
  borderRadius: "var(--operon-radius-lg)",
  border: "1px solid var(--operon-color-border)",
  boxShadow: "var(--operon-shadow-md)",
});

export const authTitleStyle = css({
  fontSize: "20px",
  fontWeight: "700",
  color: "var(--operon-color-text)",
  letterSpacing: "-0.01em",
  marginBottom: "4px",
});

export const authSubtitleStyle = css({
  fontSize: "13px",
  color: "var(--operon-color-text-muted)",
  marginBottom: "24px",
});

export const authErrorStyle = css({
  padding: "10px 12px",
  marginBottom: "16px",
  borderRadius: "var(--operon-radius-md)",
  border: "1px solid var(--operon-color-danger)",
  backgroundColor: "var(--operon-color-danger-ghost)",
  color: "var(--operon-color-danger)",
  fontSize: "13px",
  width: "100%",
});

export const authFormStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});

export const authFieldStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const authLabelStyle = css({
  fontSize: "12px",
  fontWeight: "500",
  color: "var(--operon-color-text)",
});

export const authLinkStyle = css({
  fontSize: "12px",
  color: "var(--operon-color-primary)",
  textDecoration: "none",
  fontWeight: "500",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const authFooterStyle = css({
  marginTop: "20px",
  fontSize: "13px",
  color: "var(--operon-color-text-muted)",
  textAlign: "center",
});
